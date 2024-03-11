const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { initWebRoutes } = require('./routes/web');
// const connection = require('./config/connectDB');

const app = express();
initWebRoutes(app);
const port = process.env.PORT || 8080;

// Add headers before the routes are defined
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', process.env.FE_URL);

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.use(express.json());

// test connection to database
// connection();

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});