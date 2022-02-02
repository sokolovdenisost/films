const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults({ static: "./build" });
const port = 3000;
const cors = require("cors");

server.use(cors());

// server.use(middlewares);
server.use(router);

server.listen(port);

// react

const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(8000);
