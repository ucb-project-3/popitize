const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const db = require('./models');
const userSeed = require('./seeders/seeds');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(morgan('combined'));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(parser.text());

app.use('/', express.static('../../build'));

if (!(process.env.NODE_ENV === 'test')) {
  db.sequelize.sync({ force: true })
    .then(() => {
      app.listen(PORT, () => {
        userSeed();
        console.log('Server listening on localhost:8080');
      });
    });
}

// export server for testing
module.exports = {
  noDb: () => (
    app.listen(PORT)
  ),

  dbNoSeed: async () => {
    await db.sequelize.sync({ force: true });
    return app.listen(PORT);
  },

  dbSeed: async () => {
    await db.sequelize.sync({ force: true });
    await userSeed();
    return app.listen(PORT);
  }
};

