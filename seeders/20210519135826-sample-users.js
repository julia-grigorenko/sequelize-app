'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert(
        'Users', 
        [
          {
            firstName: 'John',
            lastName: 'Doeuson',
            email: 'dou@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date(),
            password: 'text'
          },
          {
            firstName: 'Mike',
            lastName: 'Lison',
            email: 'lisn@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date(),
            password: 'text1'
          },
          {
            firstName: 'Sara',
            lastName: 'Bry',
            email: 'brys@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date(),
            password: 'text2',
          },
        ], {});
   
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Users', null, {});
  }
};
