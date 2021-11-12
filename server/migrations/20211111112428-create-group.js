'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('groups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      describe: {
        type: Sequelize.STRING
      },
      population: {
        type: Sequelize.INTEGER
      },
      gather_location: {
        type: Sequelize.STRING
      },
      leader: {
        type: Sequelize.INTEGER
      },
      location_address: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('groups');
  }
};