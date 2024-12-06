const app = require("./src/app");

const PORT = process.env.PORT || 3056;

// Start server
const server = app.listen(PORT, () => {
  console.log(`WSW eCommerce Server is running on port ${PORT}`);
});

process.on("SIGINT", () => {
  server.close(() => console.log("Server closed"));
  // Notify ...
});
