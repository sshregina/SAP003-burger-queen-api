'use strict';
module.exports = (sequelize, DataTypes) => {
  const items = sequelize.define('items', {
    id_products: DataTypes.INTEGER,
    id_order: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    options: DataTypes.STRING,
    id_extras: DataTypes.INTEGER
  }, {});
  items.associate = function(models) {
    items.belongsTo(models.orders)
    items.belongsTo(models.products)
  };
  return items;
};