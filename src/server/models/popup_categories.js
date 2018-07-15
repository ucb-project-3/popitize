module.exports = function(sequelize, DataTypes) {
    var POPUP_CATEGORY = sequelize.define("POPUP_CATEGORY", {
        id: { type: DataTypes.UUIDV4, primaryKey: true, allowNull: false },
        category_name: { type: DataTypes.STRING(48) },
        category_description: { type: DataTypes.STRING(25) }
        
    });
  
    POPUP_CATEGORY.associate = function(models) {
      // We're saying that a POPUP_CATEGORY should belong to an Author
      // A POPUP_CATEGORY can't be created without an Author due to the foreign key constraint
      POPUP_CATEGORY.hasMany(models.POPUP, {
        onDelete: "cascade"
      });

      POPUP_CATEGORY.hasMany(models.RENTER, {
        onDelete: "cascade"
      });
    };
  
    return POPUP_CATEGORY;
  };
  