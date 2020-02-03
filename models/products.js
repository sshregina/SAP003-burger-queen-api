'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    isExtras: DataTypes.BOOLEAN,
    hasOptions: DataTypes.STRING,
    breakfast: DataTypes.BOOLEAN
  }, {});
  products.associate = function(models) {
    products.hasMany(models.items);
  };
  return products;
};