'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  user.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.INTEGER,
    image: DataTypes.BLOB,
    blog: DataTypes.STRING,
    user_address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};