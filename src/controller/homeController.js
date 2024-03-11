const connection = require('../config/database');

const handleHelloWorld = (req, res) => {
  return res.status(200).send('Hello World From homeController');
};

const handleFetchAllUsers = async (req, res) => {
  connection.query('SELECT * FROM usertests', (err, rows, fields) => {
    if (err) {
      console.log(err);
    } else {
      console.log(rows);
      console.log(fields);
      return res.status(200).send(rows);
    }
  });
};

module.exports = {
  handleHelloWorld,
  handleFetchAllUsers,
};
