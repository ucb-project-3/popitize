module.exports = (sequelize, DataTypes) => {
  const RentalAgreement = sequelize.define('RentalAgreement', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      default: DataTypes.UUIDV4,
      unique: true,
    },
    total_rent: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rental_period: {
      type: DataTypes.DATE,
      allowNull: false
    }

  });

  RentalAgreement.associate = (models) => {
    // We're saying that a RentalAgreement should belong to an Author
    // A RentalAgreement can't be created without an Author due to the foreign key constraint
    RentalAgreement.belongsTo(models.Renter, {
      foreignKey: {
        name: 'renter_id',
        allowNull: false
      }
    });

    RentalAgreement.belongsTo(models.Popup, {
      foreignKey: {
        name: 'popup_id',
        allowNull: false
      }
    });
  };

  return RentalAgreement;
};

