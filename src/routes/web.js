const express = require('express');
const router = express.Router();
const homeController = require('../controller/homeController');

const initWebRoutes = (app) => {
  router.get('/', homeController.handleHelloWorld);
  router.get('/api/users', homeController.handleFetchAllUsers);
  router.post('/api/user', homeController.createNewUser);
  router.delete('/api/user/:id', homeController.deleteUser);
  return app.use('/', router);
};

module.exports = { initWebRoutes };
