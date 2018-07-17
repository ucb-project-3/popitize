import { expect, assert } from 'chai';
import db from '../../server/models';

describe('Insert into Users table', () => {
  it('should not throw', (done) => {
    try {
      db.User.create({
        email: 'test@gmail.com',
        password: 'test12345',
        age_range: 1,
        credit_rating: 500,
        address_1: '1335 larkey ln',
        city: 'walnut creek',
        state: 'ca',
        zip: '94523',
      }).then(() => {
        done();
      }).catch(() => {
        assert.ok(false);
        done();
      });
    } catch (err) {
      assert.ok(false);
      done();
    }
  });
});
