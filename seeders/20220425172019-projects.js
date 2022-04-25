'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Projects',
    [
      {
        name: 'createStore( )',
        github_link: 'https://github.com/ninamarq/create-store',
        img_link: 'https://github.com/ninamarq/create-store/blob/main/createstore.png?raw=true',
        // usamos a função CURRENT_TIMESTAMP do SQL para salvar a data e hora atual nos campos `createdAt` e `updatedAt`
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'crud-typescript',
        github_link: 'https://github.com/ninamarq/crud-typescript',
        img_link: 'https://github.com/ninamarq/crud-typescript/blob/main/assets/telaInsomnia.png?raw=true',
        // usamos a função CURRENT_TIMESTAMP do SQL para salvar a data e hora atual nos campos `createdAt` e `updatedAt`
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};