'use strict';

let {records} = require('../../data/dummy-data');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Emails', records, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Emails', null, {});
  }
};
