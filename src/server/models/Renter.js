module.exports = (sequelize, DataTypes) => {
  const Renter = sequelize.define('Renter', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      default: DataTypes.UUIDV4,
      unique: true,
    },
    // user_id: {
    //   type: DataTypes.UUID,
    //   allowNull: false
    // },
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
    // Renter.hasMany(models.RentalAgreement, {
    //   onDelete: 'cascade'
    // });

    Renter.belongsTo(models.User, {
      foreignKey: {
        name: 'user_id',
        allowNull: false
      },
      targetKey: 'id',
    });

    Renter.belongsTo(models.PopupCategory, {
      foreignKey: {
        name: 'category_id',
        allowNull: false,
      },
      targetKey: 'id',
    });
  };

  return Renter;
};
