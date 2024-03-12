const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { initWebRoutes } = require('./routes/web');
// const connection = require('./config/connectDB');

const app = express();
app.use(cors({ origin: process.env.FE_URL }));
app.use(express.json());
initWebRoutes(app);

// test connection to database
// connection();

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(typeof process.env.DB_PASSWORD);
  console.log(`Example app listening on http://localhost:${port}`);
});
