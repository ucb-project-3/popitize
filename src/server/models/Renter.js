module.exports = (sequelize, DataTypes) => {
  const Renter = sequelize.define('Renter', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defualt: DataTypes.UUIDV4
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    popup_category: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    popup_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    desired_begin_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    desired_end_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    rental_rate: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Renter.associate = (models) => {
    // We're saying that a Renter should belong to an Author
    // A Renter can't be created without an Author due to the foreign key constraint
    Renter.hasMany(models.RentalAgreement, {
      onDelete: 'cascade'
    });

    Renter.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });

    Renter.belongsTo(models.PopupCategory, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Renter;
};
