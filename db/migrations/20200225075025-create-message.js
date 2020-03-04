'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      time: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      isAnswer:{
        type:Sequelize.INTEGER(1)
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: 'id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Messages');
  }
};