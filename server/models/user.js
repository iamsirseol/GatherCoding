'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      this.belongsToMany(models.group, {through: "user_group", foreignKey: "group_id"});
      this.hasOne(models.group, {foreignKey: "leader", sourceKey: "id", onDelete: "cascade"});
    }
  };
  user.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.INTEGER,
    image: DataTypes.BLOB,
    blog: DataTypes.STRING,
    user_address: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};