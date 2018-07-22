const db = require('./models');

db.User.create({
  email: 'yolo@yooloo.net',
  first_name: 'francis',
  last_name: 'looney',
  password: 'asdlkjigkjkeoia',
  age_range: 2,
  credit_rating: 700,
  address_1: '1534 nowhere ave.',
  city: 'san francisco',
  state: 'ca',
  zip: '43212',
}).then(user => console.log(user))
  .catch((err) => {
    throw err;
  });

