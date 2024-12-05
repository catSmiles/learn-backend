"use strict";

const mongoose = require("mongoose");
const connectString = `mongodb://localhost:27017`;

class Database {
  constructor() {
    this.connect();
  }

  // Connect
  connect(type = "mongodb") {
    // Dev
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }

    mongoose
      .connect(connectString)
      .then((_) => console.log("Connected to MongoDB Success PRO"))
      .catch((err) => console.log("Error connecting to MongoDB", err));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();

module.exports = instanceMongodb;
