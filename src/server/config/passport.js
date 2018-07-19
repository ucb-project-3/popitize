const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const configAuth = require("./auth");


passport.use(
  new FacebookStrategy(
    {
      clientID: configAuth.facebookAuth.appID,
      clientSecret: configAuth.facebookAuth.appSecret,
      callbackURL: configAuth.facebookAuth.callbackURL,
      profileFields: ["id", "emails", "name"]
    },
    (accessToken, refreshToken, profile, done) =>
      findUserOrCreate(profile, done)
  )
);

