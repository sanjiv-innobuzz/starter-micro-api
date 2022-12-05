const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("success");
});

app.listen(port, (req, res) => {
  console.log(`server listening on port: ${port} .....`);
});
