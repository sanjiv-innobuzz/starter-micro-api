const express = require("express");
const app = express();
const port = 3000;
const IP = require("ip");

app.get("/", (req, res) => {
  const ipAddress = IP.address();
  console.log("ip:", ipAddress);
  res.send("success");
});

app.get("/getUser", (req, res) => {
  res.send("lama King");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
