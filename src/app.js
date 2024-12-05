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

// Init db
// require("./dbs/init.mongodb.lv0");
require("./dbs/init.mongodb");

// Init Routes
app.get("/", (req, res, next) => {
  const strCompress = "Hello world!";

  return res.status(200).json({
    message: "Welcome to WSW eCommerce API",
    metadata: strCompress.repeat(100000),
  });
});

module.exports = app;
