'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    name: DataTypes.STRING,
    content: DataTypes.STRING,
    time: DataTypes.STRING,
    message_id:{
      type: DataTypes.INTEGER,
      references: {
        model: "Messages",
        key: "id"
      }
    }
  }, {
    timestamps: false
  });
  Answer.associate = function(models) {
    // associations can be defined here
    Answer.belongsTo(models.Message, {
      foreignKey: "message_id"
    })
  };
  return Answer;
};