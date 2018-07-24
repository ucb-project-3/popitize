// import { expect } from 'chai';
// import store from '../../client/store';
// import { newUser } from '../../client/actions/userActions';
// import { dbNoSeed } from '../../server';

// describe('new user redux action', () => {
//   it('should not fail when passed valid user object', (done) => {
//     const good = {
//       email: 'ben@ben.co.uk',
//       first_name: 'Benjamin',
//       last_name: 'Rose',
//       password: 'test1332UU?!!',
//       age_range: 2,
//       credit_rating: 666,
//       address_1: '2323 239051th st',
//       city: 'bezerkeley',
//       state: 'ca',
//       zip: 88443,
//     };
//     dbNoSeed().then((server) => {
//       store.dispatch(newUser(good));
//       server.close();
//       done();
//     });
//   });
// });

