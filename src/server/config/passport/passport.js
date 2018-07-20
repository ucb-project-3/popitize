// load bcrypt
const bCrypt = require('bcrypt-nodejs');

module.exports = function (passport, user) {
  const User = user;
  const LocalStrategy = require('passport-local').Strategy;

  passport.use('local-signup', new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    ((req, email, password, done) => {
      const generateHash = function (password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
      };
      User.findOne({
        where: { email }
      })
        .then((user) => {
          if (user) {
            return done(null, false, {
              message: 'That email is already taken'
            });
          }

          const userPassword = generateHash(password);
          const data =
                        {
                          email,
                          password: userPassword,
                          name: req.body.name,
                          weight: req.body.weight,
                          sex: req.body.sex,
                        };

          User.create(data)
            .then((newUser, created) => {
              if (!newUser) {
                return done(null, false);
              }
              if (newUser) {
                return done(null, newUser);
              }
            });
        });
    })
  ));


  // LOCAL SIGNIN
  passport.use('local-signin', new LocalStrategy(

    {
      // by default, local strategy uses username and password, we will override with email
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    ((req, email, password, done) => {
      const User = user;
      const isValidPassword = function (userpass, password) {
        return bCrypt.compareSync(password, userpass);
      };
      User.findOne({
        where: { email }
      })
        .then((user) => {
          if (!user) {
            return done(null, false, {
              message: 'Email does not exist'
            });
          }
          if (!isValidPassword(user.password, password)) {
            return done(null, false, {
              message: 'Incorrect password.'
            });
          }
          const userinfo = user.get();
          console.log(`userinfo ${userinfo.name}`);
          return done(null, userinfo);
        })
        .catch((err) => {
          console.log('Error:', err);
          return done(null, false, {
            message: 'Something went wrong with your Signin'
          });
        });
    })
  ));


  // serialize
  passport.serializeUser((user, done) => {
    // var sessionUser = {id: user.id, name: user.name, email: user.email}
    done(null, user.id);
    // done(null, sessionUser);
  });

  // deserialize user
  passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
      if (user) {
        done(null, user.get());
      } else {
        done(user.errors, null);
      }
    });
  });
// passport.deserializeUser(function(sessionUser, done) {
//     User.findById(sessionUser.id).then(function(user) {
//         if (user) {
//             done(null, user.get());
//         } else {
//             done(user.errors, null);
//         }
//     });
// });
};
