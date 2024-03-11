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
      //   console.log(fields);
      return res.status(200).send(rows);
    }
  });
};

const createNewUser = async (req, res) => {
  const query = 'INSERT INTO usertests (name, email, city, createdAt, updatedAt) value (?, ?, ?, ?, ?)';
  connection.query(query, [req.name, req.email, req.city, new Date(), new Date()], (err, result, fields) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      console.log(fields);
    }
  });
};

module.exports = {
  handleHelloWorld,
  handleFetchAllUsers,
};
