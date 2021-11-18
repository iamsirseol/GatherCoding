// const Movie = sequelize.define('Movie', { name: DataTypes.STRING });
// const Actor = sequelize.define('Actor', { name: DataTypes.STRING });
// const ActorMovies = sequelize.define('ActorMovies', {
//   MovieId: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: Movie, // 'Movies' would also work
//       key: 'id'
//     }
//   },
//   ActorId: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: Actor, // 'Actors' would also work
//       key: 'id'
//     }
//   }
// });
// Movie.belongsToMany(Actor, { through: ActorMovies });
// Actor.belongsToMany(Movie, { through: ActorMovies });



const Sequelize = require('sequelize');
const User = require('./user');
const Group = require('./group');

module.exports = class UserGroup extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            UserId: {
                type: Sequelize.INTEGER,
                references: {
                    model: User,
                    key: 'id'
                }
            },
            GroupId: {
                type: Sequelize.INTEGER,
                references: {
                    model: Group,
                    key: 'id'
                }
            }
        }, {
            sequelize,
            timestamps: false,
            underscored: false, 
            modelName: 'UserGroup',
            tableName:'UserGroup',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
}