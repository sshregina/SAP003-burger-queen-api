'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    name_client: DataTypes.STRING,
    id_table: DataTypes.INTEGER,
    time: DataTypes.DATE,
    final_time: DataTypes.DATE,
    total_price: DataTypes.DECIMAL,
    status: DataTypes.STRING
  }, {});
  orders.associate = function(models) {
    orders.hasMany(models.items)
    orders.belongsTo(models.tables)
  };
  return orders;
};