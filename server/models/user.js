'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    // static associate(models) {
    //   this.belongsToMany(models.group, {through: user_group, foreignKey: group_id});
    //   this.belongsTo(models.group, {});
    // }
  };
  user.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
    blog: DataTypes.STRING,
    current_location: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};