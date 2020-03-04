'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    name: DataTypes.STRING,
    time: DataTypes.STRING,
    content: DataTypes.STRING,
    isAnswer:{
      type:DataTypes.INTEGER,
      defaultValue:0
    },
    user_id: {
      type:DataTypes.INTEGER,
      references: {
        model: "Users",
        key: 'id'
      }
    }
  }, {
    timestamps:false
  });
  Message.associate = function(models) {
    // associations can be defined here
    Message.belongsTo(models.User,{
      foreignKey: "user_id"
    })
    Message.hasMany(models.Answer, {
      foreignKey: "message_id"
    })
  };
  return Message;
};