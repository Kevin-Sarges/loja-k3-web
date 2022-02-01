const express = require("express");
const favicon = require("express-favicon");
const path = require("path");

const app = express();

const port = 9000 || process.env.PORT;

app.use(favicon(__dirname + "/build/favicon.ico"));
app.use(express.static(path.resolve(__dirname, "build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log("Ruing...");
});
