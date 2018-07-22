const db = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) =>
    // Add altering commands here.
    // Return a promise to correctly handle asynchronicity.

    db.User.bulkCreate([
      {
        email: 'ben@gmail.com',
        first_name: 'Ben',
        last_name: 'Octopus',
        password: '12345',
        age_range: 1,
        credit_rating: 700,
        address_1: '620 2nd street',
        city: 'San Francisco',
        state: 'ca',
        zip: '94107',
      },
      {
        email: 'david@gmail.com',
        first_name: 'David',
        last_name: 'Blanchard',
        password: '12345',
        age_range: 1,
        credit_rating: 700,
        address_1: '1001 Pine st',
        city: 'San Francisco',
        state: 'ca',
        zip: '94107',
      },
      {
        email: 'james@gmail.com',
        first_name: 'Jim',
        last_name: 'Chambers',
        password: '12345',
        age_range: 1,
        credit_rating: 700,
        address_1: '1445 bush st',
        city: 'San Francisco',
        state: 'ca',
        zip: '94107',
      },
      {
        email: 'anna@gmail.com',
        first_name: 'Anna',
        last_name: 'Beyonce',
        password: '12345',
        age_range: 1,
        credit_rating: 700,
        address_1: '7 3rd st',
        city: 'San Francisco',
        state: 'ca',
        zip: '94107',
      },
      {
        email: 'sevil@gmail.com',
        first_name: 'Sevil',
        last_name: 'Rao',
        password: '12345',
        age_range: 1,
        credit_rating: 700,
        address_1: '640 2nd st',
        city: 'San Francisco',
        state: 'ca',
        zip: '94107',
      },
      {
        email: 'alice@gmail.com',
        first_name: 'Alice',
        last_name: 'Teddy',
        password: '12345',
        age_range: 1,
        credit_rating: 700,
        address_1: '2225 23rd st',
        city: 'San Francisco',
        state: 'ca',
        zip: '94107',
      },
      {
        email: 'rai@gmail.com',
        first_name: 'Rai',
        last_name: 'Man',
        password: '12345',
        age_range: 1,
        credit_rating: 700,
        address_1: '151 3rd st',
        city: 'San Francisco',
        state: 'ca',
        zip: '94107',
      },
      {
        email: 'emma@gmail.com',
        first_name: 'Emma',
        last_name: 'Tyae',
        password: '12345',
        age_range: 1,
        credit_rating: 700,
        address_1: '620 2nd st',
        city: 'San Francisco',
        state: 'ca',
        zip: '94107',
      },
      {
        email: 'coop@gmail.com',
        first_name: 'Coop',
        last_name: 'Substitutian',
        password: '12345',
        age_range: 1,
        credit_rating: 700,
        address_1: '170 O\'Farrel st.',
        city: 'San Francisco',
        state: 'ca',
        zip: '94107',
      },
      {
        email: 'berkeley@gmail.com',
        first_name: 'Berk',
        last_name: 'Enstocks',
        password: '12345',
        age_range: 1,
        credit_rating: 700,
        address_1: '160 Main St.',
        city: 'San Francisco',
        state: 'ca',
        zip: '94107',
      },
    ]),

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};