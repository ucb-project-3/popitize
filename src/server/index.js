const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const db = require('./models');
const passport = require('passport')
const passportConfig = require('./config/passport/passport')
const userSeed = require('./seeders/seeds');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(morgan('combined'));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(parser.text());

app.use('/', express.static('../../build'));

db.sequelize.sync({ force: true })
  .then(() => {
    app.listen(PORT, () => {
      userSeed();
      console.log('Server listening on localhost:8080');
    });
  });
