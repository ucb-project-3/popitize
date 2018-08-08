const { createHash, randomBytes } = require('crypto');

module.exports.hash = value => (
  createHash('md5').update(value).digest('hex')
);

module.exports.generateToken = () => (
  new Promise(resolve => (
    randomBytes(48, (err, buffer) => {
      if (err) throw err;
      resolve(buffer.toString('hex'));
    })
  ))
);
