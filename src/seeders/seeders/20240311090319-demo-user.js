'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('usertests', [
      {
        name: 'HHP',
        email: 'abc@gmail.com',
        city: 'HCM city',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'HHP 2',
        email: 'abc@gmail.com',
        city: 'New York',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'HHP 3',
        email: 'abc@gmail.com',
        city: 'Seoul',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('usertests', null, []);
  },
};
