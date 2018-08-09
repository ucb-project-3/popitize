const db = require('../models');
const { hash, generateToken } = require('../utils/crypt');

module.exports.createUser = userResponse => (
  new Promise((resolve) => {
    const user = db.User.build({
      ...userResponse,
      password: hash(userResponse.password),
    });
    // user.validate().then((err) => {
    // });
    user.save()
      .then((User) => {
        const {
          id,
          first_name,
          last_name,
          email,
          age_range,
        } = User;
        generateToken()
          .then((t) => {
            const date = new Date();
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
        throw new Error(dbErr);
      });
  })
);

module.exports.authUser = userResponse => (
  new Promise((resolve) => {
    const { email } = userResponse;
    const uPass = hash(userResponse.password);
    db.User.findOne({
      where: {
        email
      },
      include: [{
        association: 'Hosts',
        attributes: [
          'id',
          'total_store_length',
          'total_store_width',
          's_address_1',
          's_city',
          's_state',
          's_zip',
          's_address_2',
          'rental_rate',
        ]
      }],
      attributes: [
        'first_name',
        'password',
        'email',
        'last_name',
        'age_range',
        'credit_rating',
        'id',
      ]
    })
      .then((fullUser) => {
        console.log('user obj', fullUser);
        const { password, ...User } = fullUser.dataValues;
        if (!User) {
          throw new Error('user not found');
        }
        if (password === uPass) {
          db.Token.destroy({
            where: {
              user_id: User.id,
            }
          })
            .then(() => {
              generateToken()
                .then((t) => {
                  db.Token.create({
                    t,
                    exp: new Date().getTime(),
                    user_id: User.id,
                  })
                    .then((NewT) => {
                      const newT = NewT.dataValues;
                      resolve({
                        ...User,
                        token: newT.t,
                        exp: newT.exp,
                      });
                    });
                });
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

module.exports.verifyToken = token => (
  new Promise(resolve => (
    db.Token.findOne({
      where: { t: token },
      attributes: [
        'exp',
        'user_id'
      ],
      // include: [{
      //   model: 'Users',
      //   // as: 'user',
      //   // attributes: [
      //   //   'first_name',
      //   //   'last_name',
      //   //   'email',
      //   //   'id',
      //   //   'age_range',
      //   // ],
      // }],
      // include: ['User'],
    })
      .then((data) => {
        if (!data) {
          resolve(null);
          return;
        }
        console.log('res', data);
        const { exp, user_id } = data;
        const now = new Date().getTime();
        if (exp < now) {
          resolve(null);
        }
        db.User.findOne({
          where: {
            id: user_id,
          },
          include: [{
            association: 'Hosts',
            attributes: [
              'id',
              'total_store_length',
              'total_store_width',
              's_address_1',
              's_city',
              's_state',
              's_zip',
              's_address_2',
              'rental_rate',
            ]
          }],
          attributes: [
            'first_name',
            'last_name',
            'email',
            'id',
            'age_range',
          ]
        })
          .then(user => resolve(user));
      })
  ))
);

