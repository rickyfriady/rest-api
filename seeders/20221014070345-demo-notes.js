'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    
    
    return queryInterface.bulkInsert('notes', [
    {
      title : "seeder data title 01",
      description: "seeder data description 01",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title : "seeder data title 02",
      description: "seeder data description 02",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title : "seeder data title 03",
      description: "seeder data description 03",
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('notes', null, {});
  }
};
