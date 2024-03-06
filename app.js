const express = require('express');
const connection = require('./src/config/database');
require('dotenv/config');

const app = express();
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

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
