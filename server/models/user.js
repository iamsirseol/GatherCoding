// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class user extends Model {
//     static associate(models) {
//       this.belongsToMany(models.group, {through: "user_group", foreignKey: "group_id"});
//       this.hasOne(models.group, {foreignKey: "leader", sourceKey: "id", onDelete: "cascade"});
//     }
//   };
//   user.init({
//     username: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING,
//     image: DataTypes.STRING,
//     blog: DataTypes.STRING,
//     current_location: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'user',
//   });
//   return user;
// };


const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            username: {
                type: Sequelize.STRING(50)
            },
            email: {
                type: Sequelize.STRING(255)
            },
            password: {
                type: Sequelize.STRING(50)
            },
            image: {
                type: Sequelize.STRING(255)
            },
            blog: {
                type: Sequelize.STRING(255)
            },
            current_region: {
                type: Sequelize.STRING(255)
            },
            current_city: {
                type: Sequelize.STRING(255)
            }
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'User',
            tableName: 'users',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.User.belongsToMany(db.Group, { through: 'UserGroup' });

    }
    static leader(db) {
        db.User.hasMany(db.Group);
    }
}