"use strict";

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
    await queryInterface.bulkInsert("users", [
      {
        username: "a",
        email: "abc@gmail.com",
        password: "123456",
        groupId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "b",
        email: "abc@gmail.com",
        password: "123456",
        groupId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "c",
        email: "abc@gmail.com",
        password: "123456",
        groupId: 3,
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
  },
};
