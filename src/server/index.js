const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const db = require('./models');
const passport = require('passport');
const session = require('express-session');
const env = require('dotenv').load();
const userSeed = require('./seeders/seeds');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(morgan('combined'));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(parser.text());

// For Passport
 
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.use('/', express.static('../../build'));
app.use(authRoutes);

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
// module.exports = {
//   noDb: () => (
//     app.listen(PORT)
//   ),

//   dbNoSeed: async () => {
//     await db.sequelize.sync({ force: true });
//     return app.listen(PORT);
//   },

//   dbSeed: async () => {
//     await db.sequelize.sync({ force: true });
//     await userSeed();
//     return app.listen(PORT);
//   }
// };
