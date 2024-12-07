require("dotenv").config();
// import express from "express";
const express = require("express");
const morgan = require("morgan");
const { default: helmet } = require("helmet");
const compression = require("compression");

const app = express();

// Init Middlewares
app.use(morgan("dev")); // Log every request to the console
app.use(helmet()); // Set security HTTP headers
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Init db
// require("./dbs/init.mongodb.lv0");
require("./dbs/init.mongodb");

/**
 * Check over load
 *
 * @example
 * const { checkOverLoad } = require("./helpers/check.connect");
 * checkOverLoad();
 */

// Init Routes
app.use("/", require("./routes"));

module.exports = app;
