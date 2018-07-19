const passport = require("passport");
require("dotenv").config();


module.exports.fbAuth = (req, res, next) => {
  passport.authenticate("facebook", {
    state: req.query.linkinguri
  })(req, res, next);
};

module.exports.fbAuthCB = (req, res, next) => {
  passport.authenticate("facebook", (err, user, info) =>
    generateTokenAndRedirect(req, res, next, err, user, info)
  )(req, res, next);
};

