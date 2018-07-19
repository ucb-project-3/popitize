const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const db = require('./models');
require("dotenv").config();
const passport = require("passport");
require("./config/passport");
const authRoutes = require("./routes/authRoutes");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(morgan('combined'));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(parser.text());

app.use(passport.initialize());
app.use("/", authRoutes);
app.use('/', express.static('../../build'));

db.sequelize.sync({ force: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log('Server listening on localhost:8080');
    });
  });
