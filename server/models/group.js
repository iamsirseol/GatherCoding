// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class group extends Model {


//     static associate(models) {
//       this.belongsToMany(models.user, {through: "user_group", foreignKey: "user_id", onDelete: "cascade"});
//       this.hasOne(models.user, {foreignKey: "id", onDelete: "cascade"});
//     }
//   };

//   group.init({
//     title: DataTypes.STRING,
//     describe: DataTypes.STRING,
//     population: DataTypes.INTEGER,
//     gather_location: DataTypes.STRING,
//     leader: DataTypes.INTEGER,
//     location_address: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'group',
//   });
//   return group;
// };

const Sequelize = require('sequelize');

module.exports = class Group extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            title: {
                type: Sequelize.STRING(50)
            },
            description: {
                type: Sequelize.STRING(255)
            },
            population: {
                type: Sequelize.INTEGER
            },
            meeting_place: {
                type: Sequelize.STRING(50)
            },
            leader_id: {
                type: Sequelize.INTEGER
            },
            UserId: {
                type: Sequelize.INTEGER
            },
            location: {
                type: Sequelize.STRING(255)
            }
        }, {
            sequelize,
            timestamps: false,
            underscored: false, 
            modelName: 'Group',
            tableName:'groups',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db) {
        db.Group.belongsToMany(db.User, { through: 'UserGroup' });
        
    }
    static leader(db) {
        db.Group.belongsTo(db.User);
    }
}