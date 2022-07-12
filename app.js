const express = require("express");
const PORT = 6000;
const app = express();

app.get("/", (req, res) => {
  res.send(
    "Now look this COMPUTER IS SHIT!!!D TEST AGAIN again shit about to happen"
  );
});

app.listen(PORT, () => {
  console.log("Hello changes");
});
