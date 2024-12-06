"use strict";

const mongoose = require("mongoose");

//! Tim hieu "os" va "process" dung de lam gi?
const os = require("os");
const process = require("process");

// Count connect
const countConnect = () => {
  const numConnection = mongoose.connections.length;
  console.log("Number of connections::", numConnection);
};

// Check over load connect
let counter = 0; // Biến đếm số lần đã chạy
const maxRuns = 5; // Số lần muốn chạy
const intervalMs = 1000; // Thời gian mỗi lần chạy (1 giây)
const maximumConnect = 5;

const checkOverLoad = () => {
  const intervalId = setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;

    // Example maximum number of connections  based on number of cores
    const maxConnections = numCores * maximumConnect; // 5 connections

    console.log(`------------- ${counter + 1} -------------`);

    console.log(`Active connection:: ${numConnection}`);
    console.log(`Memory usage:: ${memoryUsage / 1024 / 1024} MB`);

    if (numConnection > maxConnections) {
      console.log(`Connection overload detected!`);
      //notify.send(....);
    }

    counter++;
    if (counter >= maxRuns) {
      clearInterval(intervalId);
      console.log("------------ End ------------");
    }
  }, intervalMs); // Monitor every 5 seconds
};

module.exports = {
  countConnect,
  checkOverLoad,
};
