const express = require('express');
const connection = require('./src/config/database');
require('dotenv/config');
var cors = require('cors');

const app = express();
app.use(cors());
const port = process.env.PORT || 8080;

const query = 'SELECT * from userTest';
connection.query(query, (err, results, fields) => {
  if (err) {
    console.error(err);
  } else {
    console.log(results);
    console.log(fields);
  }
});

app.use(express.json());

app.get('/shirt', (req, res) => {
  res.status(200).send({
    type: 't-shirt',
    size: 'XXL',
  });
});

app.post('/shirt/:id', (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(404).send({ message: 'we need a logo' });
  }

  res.status(200).send({
    tshirt: `a shirt with your ${logo} on it`,
  });
});

app.post('/api/user', async (req, res, next) => {
  let { email, name, city } = req.body;
  if (email && name && city) {
    const query = `INSERT INTO usertest (name, email, city) VALUES (?, ?, ?)`;
    connection.query(query, [name, email, city], (err, results, fields) => {
      if (err) {
        console.error(err);
      } else {
        console.log(results);
        console.log(fields);
      }
    });
    res.status(200).send({
      name,
      email,
      city,
    });
  } else {
    res.status(414).send({ message: 'Missing required information' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
