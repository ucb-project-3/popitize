module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    // Giving the User model a name of type STRING
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      default: DataTypes.UUIDV4,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    age_range: {
      types: DataTypes.BOOLEAN,
    },
    age_range_lower: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    age_range_higher: {
      type: DataTypes.INTEGER,
      allowNull: true
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

