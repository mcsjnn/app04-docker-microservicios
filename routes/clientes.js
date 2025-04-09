const express = require('express');
const router = express.Router();
const connection = require('../db');

router.get('/', (req, res) => {
  connection.query('SELECT * FROM clientes', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

module.exports = router;
