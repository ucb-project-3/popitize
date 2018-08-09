const router = require('express').Router();
const db = require('../models');

router.post('/reg/host', (req, res) => {
  db.Host.create(req.body)
    .then((host) => {
      console.log(host);
      const { user_id, ...others } = host.dataValues;
      res.json(others);
    })
    .catch((err) => {
      console.log(err);
      res.status(401);
      res.json(err);
    });
});

module.exports = router;
