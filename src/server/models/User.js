// const { modelUtils, modelStatics } = require('../utils');
<<<<<<< HEAD
const bcrypt = require('bcrypt');
=======
>>>>>>> 638c7bb0a47db184eb34714a55c2aa4e99a4590d

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    // Giving the User model a name of type STRING
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true,
      defaultValue: DataTypes.UUIDV4,
    },
<<<<<<< HEAD
    {
      hooks: {
        beforeCreate: (user) => {
          const salt = bcrypt.genSaltSync();
          user.password = bcrypt.hashSync(user.password, salt);
        }
      },
      instanceMethods: {
        validPassword(password) {
          return bcrypt.compareSync(password, this.password);
        }
      }
=======
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
>>>>>>> 638c7bb0a47db184eb34714a55c2aa4e99a4590d
    }
  });
  // {
  //   classMethods: {
  //     validPassword(password, passwd, done, user) {
  //       bcrypt.compare(password, passwd, (err, isMatch) => {
  //         if (err) console.log(err);
  //         if (isMatch) {
  //           return done(null, user);
  //         }
  //         return done(null, false);
  //       });
  //     }
  //   }
  // }

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

