const db = require('../models');
const { createHash } = require('crypto');

module.exports.createUser = userResponse => (
  new Promise((resolve) => {
    const user = db.User.build({
      ...userResponse,
      password: createHash('md5')
        .update(userResponse.password)
        .digest('hex'),
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

        resolve({
          id,
          first_name,
          last_name,
          email,
          age_range,
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
    const password = createHash('md5')
      .update(userResponse.password)
      .digest('hex');
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
