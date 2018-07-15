module.exports = function(sequelize, DataTypes) {
    var RENTAL_AGREEMENT = sequelize.define("RENTAL_AGREEMENT", {
        id: { type: DataTypes.UUIDV4, primaryKey: true, allowNull: false },
        renter_id: { type: DataTypes.UUIDV4, allowNull: false },
        popup_id: { type: DataTypes.UUIDV4, allowNull: false },
        total_rent: { type: DataTypes.INTEGER, allowNull: false },
        rental_period: { type: DataTypes.DATE, allowNull: false }
        
    });
  
    RENTAL_AGREEMENT.associate = function(models) {
      // We're saying that a RENTAL_AGREEMENT should belong to an Author
      // A RENTAL_AGREEMENT can't be created without an Author due to the foreign key constraint
     RENTAL_AGREEMENT.belongsTo(models.RENTER, {
        foreignKey: {
          allowNull: false
        }
      });

     RENTAL_AGREEMENT.belongsTo(models.POPUP, {
        foreignKey: {
          allowNull: false
        }
      });

    };
  
    return RENTAL_AGREEMENT;
  };
  