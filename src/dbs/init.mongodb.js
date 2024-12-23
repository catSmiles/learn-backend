"use strict";

const mongoose = require("mongoose");
const { countConnect } = require("../helpers/check.connect");

// Config
const {
  db: { host, name, port },
} = require("../configs/config.mongodb");

const connectString = `mongodb://${host}:${port}/${name}`;

console.log(connectString);

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
      .connect(connectString, {
        maxPoolSize: 50,
      })
      .then((_) => {
        console.log("Connected to MongoDB Success PRO");
        // Count number of connection
        countConnect();
      })
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
