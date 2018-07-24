import db from '../models';

module.exports.createUser = user => (
  new Promise(resolve => (
    db.User.create(user)
      .then((User) => {
        const {
          first_name,
          last_name,
          email,
          age_range,
        } = User;

        resolve({
          first_name,
          last_name,
          email,
          age_range,
        });
      })
      .catch((err) => {
        console.log(err);
        resolve(err);
      })
  ))
);

