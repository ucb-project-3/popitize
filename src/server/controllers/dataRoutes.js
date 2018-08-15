const router = require('express').Router();
const { getHosts, getPopups } = require('../businessLogic/dataActions');

// host routes
router.get('/hosts', (req, res) => {
  getHosts()
    .then(Hosts => res.json(Hosts))
    .catch(err => res.status(401).send({}));
});

router.get('/popups', (req, res) => {
  getPopups()
    .then(Popups => res.json(Popups))
    .catch((err) => { throw err; });
});

module.exports = router;
