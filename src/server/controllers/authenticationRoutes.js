const { Router } = require('express');
const { createUser, authUser } = require('../businessLogic');

const router = Router();

router.post('/auth/new', (req, res) => {
  console.log('hit', req.body);
  createUser(req.body)
    .then(User => res.json(User))
    .catch(err => res.json({ err }));
});

router.post('/auth/existing', (req, res) => {
  console.log('hit existing', req.body);
  authUser(req.body)
    .then(User => res.json(User))
    .catch(err => res.json({ err }));
});

module.exports = router;
