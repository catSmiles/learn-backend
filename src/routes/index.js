"use strict";

const express = require("express");
const router = express.Router();

router.get("", (req, res, next) => {
  return res.status(200).json({
    message: "Welcome to WSW eCommerce API",
  });
});

module.exports = router;
