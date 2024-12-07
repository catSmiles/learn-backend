"use strict";

const JWT = require("jsonwebtoken");

const createTokenPair = async (payload, publicKey, privateKey) => {
  try {
    const accessToken = await JWT.sign(payload, privateKey, {
      algorithm: "RS256",
      expiresIn: "2 days",
    });

    const refreshToken = await JWT.sign(payload, privateKey, {
      algorithm: "RS256",
      expiresIn: "7 days",
    });

    JWT.verify(accessToken, publicKey, (error, decode) => {
      if (error) {
        console.error("Error verifying::", error);
      } else {
        console.log("Decode verify::", decode);
      }
    });

    return {
      accessToken,
      refreshToken,
    };
  } catch (error) {
    console.log("Error createTokenPair::", error);
  }
};

module.exports = {
  createTokenPair,
};
