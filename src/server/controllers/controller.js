const bcrypt = require('bcryptjs');
const User = require('../models/User');

module.exports = {
  dash: (req, res, next) => {
    try {
      res.locals.data.user = new User(req.user);
      res.locals.data.isAuth = true;
      next();
    } catch (err) {
      next(err);
    }
  },
  verify: (req, res, next) => {
    res.locals.data.user = req.user;
    res.locals.data.isAuth = !!req.user;
    next();
  },
  create: (req, res, next) => {
    const { user } = req.body;
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(user.password, salt);
    try {
      new User({
        password_digest: hash,
        ...user
      })
        .save()
        .then((user) => {
          req.login(user, (err) => {
            if (err) return next(err);
            res.locals.data.user = user;
            res.locals.data.isAuth = true;
            return next();
          });
        })
        .catch(err => next(err));
    } catch (err) {
      next(err);
    }
  },
  logout: (req, res, next) => {
    req.logout();
    res.locals.data.user = null;
    res.locals.data.isAuth = false;
    next();
  }
};
