const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { initWebRoutes } = require('./routes/web');
// const connection = require('./config/connectDB');

const app = express();
app.use(cors({ origin: process.env.FE_URL }));

app.use(express.json());

initWebRoutes(app);
const port = process.env.PORT || 8080;

// test connection to database
// connection();

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
