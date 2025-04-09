const express = require('express');
const router = express.Router();
const connection = require('../db');

router.get('/', (req, res) => {
  connection.query('SELECT * FROM productos', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

module.exports = router;
