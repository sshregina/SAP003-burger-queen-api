'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_products: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "products",
          key: 'id',
        },
      },
      id_order: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "orders",
          key: 'id',
        },
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      options: {
        type: Sequelize.STRING
      },
      id_extras: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "products",
          key: 'id',
        },
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
    return queryInterface.dropTable('items');
  }
};