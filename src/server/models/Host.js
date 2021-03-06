module.exports = (sequelize, DataTypes) => {
  const Host = sequelize.define('Host', {
    // Giving the Host model a name of type STRING
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    total_store_length: {
      type: DataTypes.DECIMAL(8, 2),
      primaryKey: true,
      allowNull: false
    },
    total_store_width: {
      type: DataTypes.DECIMAL(8, 2),
      allowNull: false
    },
    s_address_1: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    s_city: {
      type: DataTypes.STRING(48),
      allowNull: false
    },
    s_state: {
      type: DataTypes.STRING(24),
      allowNull: false
    },
    s_zip: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    s_address_2: {
      type: DataTypes.STRING(128)
    },
    rental_rate: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image_url: {
      type: DataTypes.STRING(40)
    },
    accepting_renters: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  });

  Host.associate = (models) => {
    // Associating Host with Popups
    // When an Host is deleted, also delete any associated Popups
    Host.hasMany(models.Popup, {
      foreignKey: 'host_id',
      sourceKey: 'id',
      onDelete: 'cascade'
    });

    Host.hasMany(models.RentalAgreement, {
      onDelete: 'cascade'
    });

    Host.belongsTo(models.User, {
      foreignKey: {
        name: 'user_id',
        type: DataTypes.UUID,
        allowNull: false,
      },
      targetKey: 'id',
    });
  };

  return Host;
};

