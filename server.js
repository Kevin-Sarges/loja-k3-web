const express = require("express");
const path = require("path");
const app = express();

const port = 9000 || process.env.PORT;

app.get("/", express.static(path.resolve(__dirname, "./build")));

app.listen(port, () => {
  console.log("Ruing...");
});
