const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("Server is Running!");
});

app.get("/", (req, res) => {
  return res.send(true);
});
app.post("/", (req, res) => {
  return res.send(true);
});
