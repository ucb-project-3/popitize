const router = require('express').Router();
const db = require('../models');

router.post('/reg/host', (req, res) => {
  console.log(req.body);
  db.Host.create(req.body)
    .then((host) => {
      const { user_id, ...others } = host;
      res.json(others);
    })
    .catch((err) => {
      res.status(500);
      res.json(err);
    });
});

module.exports = router;
