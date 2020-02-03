'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name_client: {
        type: Sequelize.STRING
      },
      id_table: {
        type: Sequelize.INTEGER,
        references: {model: 'tables', key: 'id'}
      },
      time: {
        type: Sequelize.DATE
      },
      final_time: {
        type: Sequelize.DATE
      },
      total_price: {
        type: Sequelize.DECIMAL
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('orders');
  }
};