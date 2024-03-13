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
    await queryInterface.bulkInsert("groups", [
      {
        name: "Computer Science",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Marketing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Finance",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Graphic and Digital Design",
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
