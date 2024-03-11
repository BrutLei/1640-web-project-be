const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createPool({
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 10,
});

module.exports = connection;
