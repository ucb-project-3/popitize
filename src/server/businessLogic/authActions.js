const db = require('../models');
const { hash, generateToken } = require('../utils/crypt');

module.exports.createUser = userResponse => (
  new Promise((resolve) => {
    const user = db.User.build({
      ...userResponse,
      password: hash(userResponse.password),
    });
    user.validate().then((err) => {
      console.log('er', err);
    });
    user.save()
      .then((User) => {
        const {
          id,
          first_name,
          last_name,
          email,
          age_range,
        } = User.dataValues;
        generateToken()
          .then((t) => {
            const date = new Date();
            console.log(date.getTime());
            db.Token.create({
              t,
              exp: date.getTime() + (60 * 60 * 24 * 5 * 1000),
              user_id: id,
            })
              .then((token) => {
                resolve({
                  id,
                  first_name,
                  last_name,
                  email,
                  age_range,
                  token: token.t,
                  exp: token.exp,
                });
              });
          });
      })
      .catch((dbErr) => {
        console.log('catching', dbErr);
        throw new Error(dbErr);
      });
  })
);

module.exports.authUser = userResponse => (
  new Promise((resolve) => {
    const { email } = userResponse;
    const password = hash(userResponse.password);
    db.User.findOne({
      where: {
        email
      }
    })
      .then((User) => {
        if (!User) {
          throw new Error('user not found');
        }
        if (User.password === password) {
          const {
            first_name,
            last_name,
            id,
          } = User;
          resolve({
            first_name,
            last_name,
            id,
            email,
          });
        } else {
          throw new Error('incorrect password');
        }
      })
      .catch((err) => {
        throw new Error(err);
      });
  })
);
