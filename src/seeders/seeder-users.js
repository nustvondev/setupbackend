"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        email: "admin@gmail.com.com",
        password: "123456", // hash, salt, peper password 2=1
        firstName: "Vjet",
        lastName: "Golang",
        address: "Viet Nam",
        gender: 1,
        typeRole: "ROLE",
        keyRole: "R1",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
