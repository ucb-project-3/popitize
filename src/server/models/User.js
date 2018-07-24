module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
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
      validate: {
        len: {
          args: [6, 128],
          msg: 'Email length should be greater than 5 characters.'
        },
        isEmail: {
          msg: 'Email must be a valid email address.'
        }
      }
    },
    first_name: {
      type: DataTypes.STRING(25),
      allowNull: false,
      validate: {
        len: {
          args: [1, 25],
          msg: 'First name must not be blank and less than 25 characters long',
        },
        isAlpha: {
          msg: 'First name should only contain letters.'
        }
      }
    },
    last_name: {
      type: DataTypes.STRING(25),
      allowNull: false,
      validate: {
        len: {
          args: [1, 25],
          msg: 'Last name must not be blank and less than 25 characters long',
        },
        isAlpha: {
          msg: 'Last name should only contain letters.'
        }
      }
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false,
      validate: {
        len: {
          args: [6, 128],
          msg: 'password must be at least 6 characters long.'
        },
        isValidPass(val) {
          if (!/[a-z]/.test(val)) throw new Error('Password must contain at least one lower case letter');
          if (!/[A-Z]/.test(val)) throw new Error('Password must contain at least one Upper case letter');
          if (!/(!|?|_|-|$|#|%)/.test(val)) throw new Error('Password must contain at least one special character');
          throw new Error('it worked');
        }
      }
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

