const { Router } = require('express');
const { createUser } = require('../businessLogic');

const router = Router();

router.post('.api/auth/new', (req, res) => {
  createUser(req.body)
    .then(User => res.statusCode(201).json(User))
    .catch(err => res.statusCode(422).json({ err }));
});
