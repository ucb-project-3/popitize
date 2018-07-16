module.exports = (sequelize, DataTypes) => {
  const POPUP = sequelize.define('POPUP', {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    host_id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
    },
    POPUP_category: {
      type: DataTypes.INTEGER,
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
    rental_rate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });

  POPUP.associate = (models) => {
    // We're saying that a POPUP should belong to an Author
    // A POPUP can't be created without an Author due to the foreign key constraint
    POPUP.hasMany(models.RENTAL_AGREEMENT, {
      onDelete: 'cascade'
    });

    POPUP.belongsTo(models.HOST, {
      foreignKey: {
        allowNull: false
      }
    });

    POPUP.belongsTo(models.POPUP_CATEGORY, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return POPUP;
};
