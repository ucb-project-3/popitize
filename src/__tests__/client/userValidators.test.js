import { expect } from 'chai';
import { newUserValidator } from '../../client/validators/userValidators';

describe('client new user validator', () => {
  it('should report errors on blank object', (done) => {
    const empty = {};
    const result = newUserValidator(empty);
    expect(!!result.error).to.equal(true);
    done();
  });

  it('should report error when passed an array', (done) => {
    const array = [];
    const result = newUserValidator(array);
    expect(!!result.error).to.equal(true);
    done();
  });

  it('should report error when invalid object schema', (done) => {
    const wrong = {
      name: 'david',
      type: 'hipster',
      canCode: 'meh'
    };
    const result = newUserValidator(wrong);
    expect(!!result.error).to.equal(true);
    done();
  });

  it('should not report errors when passed legal values', (done) => {
    const right = {
      email: 'ben@ben.co.uk',
      first_name: 'Benjamin',
      last_name: 'Rose',
      password: 'test1332UU?!!',
      age_range: 2,
      credit_rating: 666,
      address_1: '2323 239051th st',
      city: 'bezerkeley',
      state: 'ca',
      zip: 88443,
    };
    const result = newUserValidator(right);
    expect(!!result.error).to.equal(false);
    done();
  });

  it('should report error when bad email', (done) => {
    const bademail = {
      email: 'ben so bad',
      first_name: 'Benjamin',
      last_name: 'Rose',
      password: 'test1332UU?!!',
      age_range: 2,
      credit_rating: 666,
      address_1: '2323 239051th st',
      city: 'bezerkeley',
      state: 'ca',
      zip: 88443,
    };
    const result = newUserValidator(bademail);
    expect(!!result.error).to.equal(true);
    done();
  });

  it('should report error when bad password', (done) => {
    const badpass = {
      email: 'ben@jamin.com',
      first_name: 'Benjamin',
      last_name: 'Rose',
      password: 'im lowercase',
      age_range: 2,
      credit_rating: 666,
      address_1: '2323 239051th st',
      city: 'bezerkeley',
      state: 'ca',
      zip: 88443,
    };
    const result = newUserValidator(badpass);
    expect(!!result.error).to.equal(true);
    done();
  });
});
