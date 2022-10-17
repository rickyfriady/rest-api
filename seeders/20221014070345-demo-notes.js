'use strict';
const { faker } = require('@faker-js/faker');

const dataArr = [];

const dataObj = (data) => {
  let dataArr = {};
  dataArr.title =  faker.commerce.product();
  dataArr.description =  faker.lorem.paragraph();
  dataArr.createdAt = new Date();
  dataArr.updatedAt = new Date();
  return dataArr;
}

for(let i=0; i < 5; i++){
  dataArr.push(dataObj(i+1))
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('notes', dataArr);
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('notes', null, {});
  }
};
