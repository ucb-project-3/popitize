const { Router } = require('express');
const { createUser, authUser, verifyToken } = require('../businessLogic');

const router = Router();

router.post('/auth/new', (req, res) => {
  createUser(req.body)
    .then(User => res.json(User))
    .catch(err => res.json({ err }));
});

router.post('/auth/existing', (req, res) => {
  try {
    authUser(req.body)
      .then(User => res.json(User))
      .catch(err => res.json({ err }));
  } catch (err) {
    res.json({ err });
  }
});

router.post('/auth/token', (req, res) => {
  verifyToken(req.body.token)
    .then((data) => {
      if (data) {
        res.json(data);
      }
      res.status(401).send();
    });
});

module.exports = router;
