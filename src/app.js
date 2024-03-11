const express = require('express');
require('dotenv').config();
var cors = require('cors');
const { initWebRoutes } = require('./routes/web');
// const connection = require('./config/connectDB');

const app = express();
initWebRoutes(app);
app.use(cors());
const port = process.env.PORT || 8080;

app.use(express.json());

// test connection to database
// connection();

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
