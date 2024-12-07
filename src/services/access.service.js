"use strict";

const bcrypt = require("bcrypt");
const crypto = require("crypto");

const shopModel = require("../models/shop.model");
const KeyTokenService = require("./keyToken.service");
const { createTokenPair } = require("../auth/authUtils");
const { getInfoData } = require("../utils");

const ROLE_SHOP = {
  SHOP: "SHOP",
  WRITER: "WRITER",
  EDITOR: "EDITOR",
  ADMIN: "ADMIN",
};

class AccessService {
  static signUp = async ({ name, email, password }) => {
    try {
      // Step 1: Check email exist?

      /**
       * When using `lean()`
       * @returns {Object} Plain JavaScript object
       */
      const holderShop = await shopModel.findOne({ email }).lean();
      if (holderShop) {
        return {
          code: "xxxx",
          message: "Shop already exists",
        };
      }

      // Hash password
      const hashPassword = await bcrypt.hash(password, 10);
      const newShop = await shopModel.create({
        name,
        email,
        password: hashPassword,
        roles: [ROLE_SHOP.SHOP],
      });

      if (newShop) {
        // Using an asymmetric algorithm to create private and public keys
        const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
          modulusLength: 4096, // the length of the modulus in bits
          publicKeyEncoding: {
            type: "pkcs1", // "public key cryptography standards 1"
            format: "pem", // Most common formatting choice
          },
          privateKeyEncoding: {
            type: "pkcs1", // "private key cryptography standards 1"
            format: "pem", // Most common formatting choice
          },
        });

        console.log({ privateKey, publicKey }); // Save collection keyStore

        const publicKeyString = await KeyTokenService.createKeyToken({
          userId: newShop._id,
          publicKey,
        });

        if (!publicKeyString) {
          return {
            code: "xxxx",
            message: "publicKeyString error",
          };
        }

        console.log("-----------------------------");
        console.log("publicKeyString::", publicKeyString);
        const publicKeyObject = crypto.createPublicKey(publicKeyString);
        console.log("publicKeyObject::", publicKeyObject);
        console.log("-----------------------------");

        // Created token pair
        const tokens = await createTokenPair(
          {
            userId: newShop._id,
            email,
          },
          // publicKey,
          publicKeyString,
          privateKey
        );
        console.log(`Created Token Success::`, tokens);

        return {
          code: 201,
          metadata: {
            shop: getInfoData({
              fileds: ["_id", "name", "email"],
              object: newShop,
            }),
            tokens,
          },
        };
      }

      return {
        code: 200,
        metadata: null,
      };
    } catch (error) {
      return { code: "xxx", message: error.message, status: "error" };
    }
  };
}

module.exports = AccessService;
