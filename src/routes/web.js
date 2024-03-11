const express = require('express');
const router = express.Router();
const homeController = require('../controller/homeController');

const initWebRoutes = (app) => {
  router.get('/', homeController.handleHelloWorld);
  router.get('/api/users', homeController.handleFetchAllUsers);

  return app.use('/', router);
};

module.exports = { initWebRoutes };
