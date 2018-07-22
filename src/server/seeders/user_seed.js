const db = require('../models');

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
      total_store_length: 500,
      total_store_width: 600,
      s_address_1: '620 2nd st',
      s_city: 'San Francisco',
      s_state: 'ca',
      s_zip: 94107,
      rental_rate: 3000,
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
));

module.exports = async () => {
  const userIds = await seedUsers();
  console.log('userids:', userIds.length);
  await seedHosts([...userIds]);
  await seedRenters([...userIds]);
};
