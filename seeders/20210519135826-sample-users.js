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
            password: 'text',
            role: 'user'
          },
          {
            firstName: 'Mike',
            lastName: 'Lison',
            email: 'lisn@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date(),
            password: 'text1',
            role: 'user'
          },
          {
            firstName: 'Sara',
            lastName: 'Bry',
            email: 'brys@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date(),
            password: 'text2',
            role: 'admin'
          },
        ], {});
   
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('Users', null, {});
  }
};
