const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const db = require('./models');
// const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
// const authRoutes = require('./controllers/authenticationRoutes');
// const dataRoutes = require('./controllers/dataRoutes');
// const dbRoutes = require('./controllers/dbRoutes');
const userSeed = require('./seeders/seeds');
const path = require('path');

const PORT = process.env.PORT || 8080;
const app = express();
const User = require('./models/User');

app.use(morgan('dev'));
app.use(parser.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(parser.json());
// app.use(parser.text());

// app.use('/', express.static(path.join(__dirname, '../../dist')));
app.use('/', express.static(path.join(__dirname, '../../')));

// For Passport
// initialize express-session to allow us track the logged-in user across sessions.

app.use(session({
  key: 'user_sid',
  secret: 'popitizeme12345!',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 600000
  }
}));

// This middleware will check if user's cookie is still saved in browser and user is not set
// then automatically log the user out.
// This usually happens when you stop your express server after login
// your cookie still remains saved in the browser.

app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie('user_sid');
  }
  next();
});

// middleware function to check for logged-in users
const sessionChecker = (req, res, next) => {
  if (req.session.user && req.cookies.user_sid) {
    res.redirect('/dashboard');
  } else {
    next();
  }
};

// route for Home-Page
app.get('/', sessionChecker, (req, res) => {
  res.redirect('/login');
});

// route for user signup
app.route('/signup')
  .get(sessionChecker, (req, res) => {
    res.sendFile('signup.html', { root: path.join(__dirname, '../../public') });
    // res.sendFile(`${__dirname}/public/signup.html`);
  })
  .post((req, res) => {
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
      .then((user) => {
        req.session.user = user.dataValues;
        res.redirect('/dashboard');
      })
      .catch((error) => {
        res.redirect('/signup');
      });
  });

// route for user Login
app.route('/login')
  .get(sessionChecker, (req, res) => {
    // res.sendFile(express.static(path.join(__dirname, '../../public/login.html')));
    res.sendFile('login.html', { root: path.join(__dirname, '../../public') });
  })
  .post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ where: { username } }).then((user) => {
      if (!user) {
        res.redirect('/login');
      } else if (!user.validPassword(password)) {
        res.redirect('/login');
      } else {
        req.session.user = user.dataValues;
        res.redirect('/dashboard');
      }
    });
  });

// route for user's dashboard
app.get('/dashboard', (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
    res.sendFile(`${__dirname}/public/dashboard.html`);
  } else {
    res.redirect('/login');
  }
});

// route for user logout
app.get('/logout', (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
    res.clearCookie('user_sid');
    res.redirect('/');
  } else {
    res.redirect('../../public/login');
  }
});

// route for handling 404 requests(unavailable routes)
app.use((req, res) => {
  res.status(404).send("Sorry can't find that!");
});


// app.use('/api', authRoutes);
// app.use('/api', dataRoutes);
// app.use(dbRoutes);

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
