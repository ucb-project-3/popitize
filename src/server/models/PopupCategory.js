module.exports = (sequelize, DataTypes) => {
  const PopupCategory = sequelize.define('PopupCategory', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      default: DataTypes.UUIDV4,
      unique: true,
    },
    category_name: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    category_description: {
      type: DataTypes.STRING(50),
      allowNull: false,
    }
  });

  PopupCategory.associate = (models) => {
    // We're saying that a PopupCategory should belong to an Author
    // A PopupCategory can't be created without an Author due to the foreign key constraint

    PopupCategory.hasMany(models.Renter, {
      foreignKey: 'category_id',
      sourceKey: 'id',
      onDelete: 'cascade',
    });
  };

  return PopupCategory;
};

