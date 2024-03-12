const connection = require('../config/database');
const bcrypt = require('bcrypt');

const handleHelloWorld = (req, res) => {
  return res.status(200).send('Hello World From homeController');
};

const handleFetchAllUsers = (req, res) => {
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

const createNewUser = (req, res) => {
  const query = 'INSERT INTO usertests (name, email, city, createdAt, updatedAt) value (?, ?, ?, ?, ?)';
  let name_unhash = req.body.name;
  let email = req.body.email;
  let city = req.body.city;
  const saltRounds = 10;

  let name = bcrypt.hashSync(name_unhash, saltRounds);

  connection.query(query, [name, email, city, new Date(), new Date()], (err, result, fields) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      console.log(fields);
      return res.status(200).send(`Create new user successful `);
    }
  });
};

const deleteUser = (req, res) => {
  const query = 'DELETE FROM usertests WHERE id=?';
  let id = req.params['id'];
  connection.query(query, id, (err, results, fields) => {
    if (err) {
      console.log(err);
    } else {
      console.log(results);
      console.log(fields);
      res.status(200).send(`Delete user with id =${id} successful`);
    }
  });
};

module.exports = {
  handleHelloWorld,
  handleFetchAllUsers,
  createNewUser,
  deleteUser,
};
