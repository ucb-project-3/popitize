const db = require('../models');
const { hash } = require('../utils/crypt');

const seedUsers = () => new Promise(resolve => (
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
    {
      email: 'test@test.com',
      first_name: 'Berk',
      last_name: 'Enstocks',
      password: hash('Pass1!'),
      age_range: 1,
      credit_rating: 700,
      address_1: '160 Main St.',
      city: 'San Francisco',
      state: 'ca',
      zip: '94107',
    },
  ], {})
    .then(entries => resolve(entries.map(User => User.dataValues.id)))
    .catch((err) => { throw new Error(err); })
));

const seedHosts = userIds => new Promise(resolve => (
  db.Host.bulkCreate([
    {
      user_id: userIds.pop(),
      total_store_length: 500,
      total_store_width: 600,
      s_address_1: '620 2nd st',
      s_city: 'San Francisco',
      s_state: 'ca',
      s_zip: 94107,
      rental_rate: 3000,
    },
    {
      user_id: userIds.pop(),
      total_store_length: 2000,
      total_store_width: 3000,
      s_address_1: '1001 Pine st',
      s_city: 'San Francisco',
      s_state: 'ca',
      s_zip: 94103,
      rental_rate: 5000,
    },
    {
      user_id: userIds.pop(),
      total_store_length: 800,
      total_store_width: 600,
      s_address_1: '4400 Shellmound st',
      s_city: 'Emneryville',
      s_state: 'ca',
      s_zip: 94609,
      rental_rate: 7500,
    },
    {
      user_id: userIds.pop(),
      total_store_length: 10000,
      total_store_width: 20000,
      s_address_1: '5095 Telegraph Ave Suite',
      s_city: 'Oakland',
      s_state: 'ca',
      s_zip: 94102,
      rental_rate: 10000,
    },
    {
      user_id: userIds.pop(),
      total_store_length: 400,
      total_store_width: 300,
      s_address_1: '450 10th st',
      s_city: 'San Francisco',
      s_state: 'ca',
      s_zip: 94103,
      rental_rate: 1200,
    },
    {
      user_id: userIds.pop(),
      total_store_length: 700,
      total_store_width: 600,
      s_address_1: '2300 16th st',
      s_city: 'San Francisco',
      s_state: 'ca',
      s_zip: 94107,
      rental_rate: 2500,
    },
    {
      user_id: userIds.pop(),
      total_store_length: 3000,
      total_store_width: 2000,
      s_address_1: '448 Grove st',
      s_city: 'San Francisco',
      s_state: 'ca',
      s_zip: 94102,
      rental_rate: 5600,
    },
    {
      user_id: userIds.pop(),
      total_store_length: 1000,
      total_store_width: 600,
      s_address_1: '2211 Filbert st',
      s_city: 'San Francisco',
      s_state: 'ca',
      s_zip: 94123,
      rental_rate: 6400,
    },
    {
      user_id: userIds.pop(),
      total_store_length: 7000,
      total_store_width: 6000,
      s_address_1: '3001 Lyon st',
      s_city: 'San Francisco',
      s_state: 'ca',
      s_zip: 94123,
      rental_rate: 9000,
    },
    {
      user_id: userIds.pop(),
      total_store_length: 150,
      total_store_width: 350,
      s_address_1: '291 Geary st',
      s_city: 'San Francisco',
      s_state: 'ca',
      s_zip: 94102,
      rental_rate: 1000,
    },
  ], {})
    .then(() => resolve())
    .catch((err) => { throw new Error(err); })
));

const seedRenters = userids => new Promise(resolve => (
  db.Renter.bulkCreate([
    {
      user_id: userids.pop(),
    },
    {
      user_id: userids.pop(),
    },
    {
      user_id: userids.pop(),
    },
    {
      user_id: userids.pop(),
    },
    {
      user_id: userids.pop(),
    },
    {
      user_id: userids.pop(),
    },
    {
      user_id: userids.pop(),
    },
    {
      user_id: userids.pop(),
    },
    {
      user_id: userids.pop(),
    },
    {
      user_id: userids.pop(),
    },
  ], {})
    .then(() => resolve())
    .catch((err) => { throw new Error(err); })
));

module.exports = async () => {
  const userIds = await seedUsers();
  console.log('userids:', userIds.length);
  await seedHosts([...userIds]);
  await seedRenters([...userIds]);
};
