'use strict';
const {
  Model
} = require('sequelize');
const user_group = require('./user_group');
module.exports = (sequelize, DataTypes) => {
  class group extends Model {

    // static associate(models) {
    //   this.belongsToMany(models.user, {through: user_group, foreignKey: user_id});
    //   this.hasOne(models.user, {foreignKey: id});
    // }
  };

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
};