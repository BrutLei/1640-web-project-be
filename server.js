const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

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
