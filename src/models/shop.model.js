"use strict";

/**
 * Key !dmbg install by Mongo Snippets for Mode-js
 *
 * @example
 *
 * !dmbg + `Tab`
 */
// const mongoose = require("mongoose"); // Erase if already required
const { model, Schema, Types } = require("mongoose");

// Declare the Schema of the Mongo model
const DOCUMENT_NAME = "Shop";
const COLLECTION_NAME = "Shops";

const shopSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      maxLength: 150,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: false,
    },
    verify: {
      type: Schema.Types.Boolean,
      default: false,
    },
    roles: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME,
  }
);

//Export the model
module.exports = model(DOCUMENT_NAME, shopSchema);
