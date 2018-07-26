const { Router } = require('express');
const { createUser } = require('../businessLogic');

const router = Router();

router.post('/api/auth/new', (req, res) => {
  console.log('hit', req.body);
  createUser(req.body)
    .then(User => res.json(User))
    .catch(err => res.json({ err }));
});

module.exports = router;
