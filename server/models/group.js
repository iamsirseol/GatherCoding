'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class group extends Model {

    static associate(models) {
      this.belongsToMany(models.user, {through: "user_group", foreignKey: "user_id", onDelete: "cascade"});
      this.hasOne(models.user, {foreignKey: "id", onDelete: "cascade"});
    }
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
  return group;
};