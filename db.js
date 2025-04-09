const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'tienda'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Conectado a la base de datos MySQL');
});

module.exports = connection;
