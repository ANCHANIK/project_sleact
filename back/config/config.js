require('dotenv').config();

module.exports = {
  "development": {
    "username": "root",
    // "password": process.env.MYSQL_PASSWORD,
    "password": '3016',
    "database": "sleact",
    "host": "172.19.0.2",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    // "password": process.env.MYSQL_PASSWORD,
    "password": '3016',
    "database": "sleact",
    "host": "172.19.0.2",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    // "password": process.env.MYSQL_PASSWORD,
    "password": '3016',
    "database": "sleact",
    "host": "172.19.0.2",
    "dialect": "mysql"
  }
}
