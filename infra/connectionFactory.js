const mysql = require('mysql');

function createConnection() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'caelum',
    database: 'casacodigo2'
  });
}

module.exports = () => createConnection
