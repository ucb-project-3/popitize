const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User', {
    // Giving the User model a name of type STRING
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        unique: true,
        defaultValue: DataTypes.UUIDV4,
      },
      email: {
        type: DataTypes.STRING(128),
        allowNull: false,
        unique: true,
      },
      first_name: {
        type: DataTypes.STRING(25),
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING(25),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(128),
        allowNull: false
      },
      age_range: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      credit_rating: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      address_1: {
        type: DataTypes.STRING(128),
        allowNull: false
      },
      city: {
        type: DataTypes.STRING(48),
        allowNull: false
      },
      state: {
        type: DataTypes.STRING(24),
        allowNull: false
      },
      zip: {
        type: DataTypes.DECIMAL(8, 0),
        allowNull: false
      },
      address_2: {
        type: DataTypes.STRING(128)
      }
    },
    {
      classMethods: {
        validPassword(password, passwd, done, user) {
          bcrypt.compare(password, passwd, (err, isMatch) => {
            if (err) console.log(err);
            if (isMatch) {
              return done(null, user);
            }
            return done(null, false);
          });
        }
      }
    }
  );

  User.hook('beforeCreate', (user, fn) => {
    const salt = bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => salt);
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      return fn(null, user);
    });
  });
  
  User.associate = (models) => {
    // Associating User with Host
    // When an User is deleted, also delete any associated Host
    User.hasMany(models.Host, {
      foreignKey: 'user_id',
      sourceKey: 'id',
      onDelete: 'cascade'
    });

    User.hasMany(models.Renter, {
      foreignKey: 'user_id',
      sourceKey: 'id',
      onDelete: 'cascade'
    });
  };

  return User;
};

