module.exports = (sequelize, DataTypes) => {
  const Renter = sequelize.define('Renter', {
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
    // type: {
    //   type: DataTypes.STRING(3, 40),
    //   allowNull: false
    // }
  //   desired_begin_date: {
  //   type: DataTypes.DATE,
  //   allowNull: false
  //   },
    
  //   desired_end_date: {
  //   type: DataTypes.DATE,
  //   allowNull: false
  //  },

    // isActive: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false
    // },
  });

  Renter.associate = (models) => {
    // We're saying that a Renter should belong to an Author
    // A Renter can't be created without an Author due to the foreign key constraint
    Renter.hasMany(models.RentalAgreement, {
      onDelete: 'cascade'
    });

    Renter.belongsTo(models.User, {
      foreignKey: {
        name: 'user_id',
        allowNull: false
      },
      targetKey: 'id',
    });

    Renter.hasMany(models.Popup, {
      foreignKey: 'popup_id',
      sourceKey: 'id',
      onDelete: 'cascade'
    });

    // Renter.belongsTo(models.PopupCategory, {
    //   foreignKey: {
    //     name: 'category_id',
    //     allowNull: true,
    //   },
    //   targetKey: 'id',
    // });
  };

  return Renter;
};
