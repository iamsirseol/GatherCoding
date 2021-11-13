'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_group extends Model {

    static associate(models) {
      this.belongsTo(models.user, {foreignKey: "id"});
      this.belongsTo(models.group, {foreignKey: "id"});
    }
  };

  user_group.init({
    user_id: DataTypes.INTEGER,
    group_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user_group',
  });
  return user_group;
};



