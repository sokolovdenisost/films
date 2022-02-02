const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults({
  static: "./build",
});
const PORT = process.env.PORT || 3001;
server.use(middlewares);
server.use(router);

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

server.listen(PORT, () => {
  console.log("Server is running");
});

// запуск react static
// const express = require("express");
// const path = require("path");

// const app = express();

// app.use(express.static(path.join(__dirname, "build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

// const PORT = 3002;

// app.listen(PORT, () => {
//   console.log("Server is starting in 3002 port...");
// });
