const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;
const hostName = process.env.HOST_NAME;

// Khai báo route
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
