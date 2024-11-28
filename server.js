const app = require("./src/app");

const PORT = 3052;

// Start server
const server = app.listen(PORT, () => {
  console.log(`WSW eCommerce Server is running on port ${PORT}`);
});

process.on("SIGINT", () => {
  server.close(() => console.log("Server closed"));
  // Notify ...
});
