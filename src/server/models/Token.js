module.exports = (sequielize, DataTypes) => {
  const Token = sequielize.define('Token', {
    t: {
      type: DataTypes.STRING(120),
      allowNull: false,
      unique: true,
    },
    exp: {
      type: DataTypes.BIGINT,
      allowNull: false,
    }
  });

  Token.associate = (models) => {
    Token.belongsTo(models.User, {
      foreignKey: {
        name: 'user_id',
        type: DataTypes.UUID,
        allowNull: false,
      },
      targetKey: 'id',
    });
  };
  return Token;
};

