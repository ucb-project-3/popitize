const db = require('../models');
// const { createUser } = require('../businessLogic');
const { Router } = require('express');

const router = Router();

router.get('/api/hosts', (req, res) => {
  console.log('hit /api/hosts');
  db.Host.findAll()
    .then((hosts) => {
      res.send(hosts);
    });
});

module.exports = router;
