module.exports = (sequelize, DataTypes) => {
  const RENTER = sequelize.define('RENTER', {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    user_id: {
      type: DataTypes.UUIDV4,
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

  RENTER.associate = (models) => {
    // We're saying that a RENTER should belong to an Author
    // A RENTER can't be created without an Author due to the foreign key constraint
    RENTER.hasMany(models.RENTAL_AGREEMENT, {
      onDelete: 'cascade'
    });

    RENTER.belongsTo(models.USER, {
      foreignKey: {
        allowNull: false
      }
    });

    RENTER.belongsTo(models.POPUP_CATEGORY, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return RENTER;
};
