'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  group.init({
    title: DataTypes.STRING,
    describe: DataTypes.STRING,
    population: DataTypes.INTEGER,
    gather_location: DataTypes.STRING,
    leader: DataTypes.INTEGER,
    location_address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'group',
  });
  return group;
};