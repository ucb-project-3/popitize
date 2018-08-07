module.exports = (sequelize, DataTypes) => {
  const Popup = sequelize.define('Popup', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      unique: true,
    },
    host_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    renter_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    Popup_category: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    popup_description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    p_length: {
      type: DataTypes.DECIMAL(8, 2),
      allowNull: false,
    },
    p_width: {
      type: DataTypes.DECIMAL(8, 2),
      allowNull: false,
    },
    begin_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });

  Popup.associate = (models) => {
    // We're saying that a Popup should belong to an Author
    // A Popup can't be created without an Author due to the foreign key constraint
    // Popup.hasMany(models.RentalAgreement, {
    //   onDelete: 'cascade'
    // });

    Popup.belongsTo(models.Host, {
      foreignKey: {
        name: 'host_id',
        allowNull: false,
      },
      targetKey: 'id',
    });

    Popup.belongsTo(models.Renter, {
      foreignKey: {
        name: 'renter_id',
        allowNull: 'false'
      },
    });

    Popup.belongsTo(models.PopupCategory, {
      foreignKey: {
        name: 'category_id',
        allowNull: false,
      },
      targetKey: 'id',
    });
  };

  return Popup;
};
