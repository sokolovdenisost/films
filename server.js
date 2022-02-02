const express = require("express");
const jsonServer = require("json-server");
const path = require("path");

const PORT = process.env.PORT || 3001;
const server = express();

server.use("/api", jsonServer.router("db.json"));

server.use(express.static(path.join(__dirname, "build")));

server.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

server.listen(PORT, () => {
  console.log("Server is running");
});
