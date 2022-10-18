'use strict';
const { faker } = require('@faker-js/faker');

function factoryNote(rowCount){
  const dataArr = [];
  for(let i = 0; i < rowCount; i++) {
    const objItems = {
      title :  faker.commerce.product(),
      description :  faker.lorem.paragraph(),
      createdAt : new Date(),
      updatedAt : new Date(),
    };
    dataArr.push(objItems);
  }
  return dataArr
}


module.exports = {
  up: (queryInterface, Sequelize) => {
    const item = factoryNote(10);
    return queryInterface.bulkInsert('notes', item);
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('notes', null, {});
  }
};
