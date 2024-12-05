"use strict";

const mongoose = require("mongoose");

const countConnect = () => {
  const numConnection = mongoose.connect.length;
  console.log("Number of connections::", numConnection);
};

module.exports = {
  countConnect,
};
