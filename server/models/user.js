'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };

    // 클래스 형태 사용할 지 group처럼 사용할지 선택
  

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