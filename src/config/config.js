const db = {
  development: {
    username: 'root',
    password: '123456',
    database: '1640_web_database',
    host: 'localhost',
    port: '3306',
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true,
    }
  },
  production: {
    
  },
  testing: {
   
  },
};

module.exports = db;