const express = require("express");
const PORT = 6000;
const app = express();

app.get("/", (req, res) => {
  res.send("Now look this COMPUTER IS SHIT!!!D");
});

app.listen(PORT, () => {
  console.log("Hello");
});
