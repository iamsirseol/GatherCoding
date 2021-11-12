'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const group = sequelize.define('group', {
    title: DataTypes.STRING,
    describe: DataTypes.STRING,
    population: DataTypes.INTEGER,
    gather_location: DataTypes.STRING,
    leader: DataTypes.INTEGER,
    location_address: DataTypes.STRING
  });

  group.associate = (models) => {
    
  }
  // group.init({
  //   title: DataTypes.STRING,
  //   describe: DataTypes.STRING,
  //   population: DataTypes.INTEGER,
  //   gather_location: DataTypes.STRING,
  //   leader: DataTypes.INTEGER,
  //   location_address: DataTypes.STRING
  // }, {
  //   sequelize,
  //   modelName: 'group',
  // });
  return group;
};