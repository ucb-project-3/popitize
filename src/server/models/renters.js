module.exports = function(sequelize, DataTypes) {
    var Renter = sequelize.define("Renter", {
        id: { type: DataTypes.UUIDV4, primaryKey: true, allowNull: false },
        user_id: { type: DataTypes.UUIDV4, allowNull: false },
        popup_category: { type: DataTypes.INTEGER, allowNull: false },
        popup_description: { type: DataTypes.TEXT, allowNull: false },
        desired_begin_date: { type: DataTypes.DATE, allowNull: false },
        desired_end_date: { type: DataTypes.DATE, allowNull: false },
        isActive: { type: DataTypes.BOOLEAN, allowNull: false },
        rental_rate: { type: DataTypes.DataTypes.INTEGER, allowNull: false }            
    });
  
    Renter.associate = function(models) {
      // We're saying that a Renter should belong to an Author
      // A Renter can't be created without an Author due to the foreign key constraint
      Renter.hasMany(models.RENTAL_AGREEMENT, {
        onDelete: "cascade"
      });
      
      Renter.belongsTo(models.USER, {
        foreignKey: {
          allowNull: false
        }
      });

      Renter.belongsTo(models.POPUP_CATEGORY, {
        foreignKey: {
          allowNull: false
        }
      });

    };
  
    return Renter;
  };
  