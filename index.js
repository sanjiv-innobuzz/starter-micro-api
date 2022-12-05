const express = require("express");
const app = express();
const port = 3000;
const IP = require("ip");

app.use("/api", require("./api"));
app.get("/", (req, res) => {
  const ipAddress = IP.address();
  console.log("ip:", ipAddress, req.socket.remoteAddress);
  res.send("success");
});

app.listen(port, (req, res) => {
  const ipAddress = IP.address();
  console.log("ip:", ipAddress);
  console.log(`server listening on port: ${port} .....`);
});
