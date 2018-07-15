module.exports = function(sequelize, DataTypes) {
    var Host = sequelize.define("Host", {
      // Giving the Host model a name of type STRING
        id: { type: DataTypes.UUIDV4, primaryKey: true },
        user_id: { type: DataTypes.UUIDV4, allowNull: false },
        total_store_length: { type: DataTypes.DECIMAL(8,2), primaryKey: true,allowNull: false },
        total_store_width: { type: DataTypes.DECIMAL(8,2), allowNull: false },
        s_address_1: { type: DataTypes.STRING(128), allowNull: false },
        s_city: { type: DataTypes.STRING(48), allowNull: false },
        s_state: { type: DataTypes.STRING(24), allowNull: false },
        s_zip: { type: DataTypes.DECIMAL(8,0), allowNull: false },
        s_adress_2: { type: DataTypes.STRING(128)
    }
    });
  
    Host.associate = function(models) {
      // Associating Host with Popups
      // When an Host is deleted, also delete any associated Popups
      Host.hasMany(models.Popup, {
        onDelete: "cascade"
      });

      Host.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });

    };
      
    return Host;
  };
  