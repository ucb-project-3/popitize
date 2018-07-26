const db = require('../models');

module.exports.createUser = userResponse => (
  new Promise((resolve) => {
    const user = db.User.build({ ...userResponse });
    user.validate().then((err) => {
      console.log('er', err);
    });
    // if (err) {
    //   resolve(err);
    // }
    user.save()
      .then((User) => {
        // console.log('saved', User);
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

