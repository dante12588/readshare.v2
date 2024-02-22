// const { DataTypes } = require('sequelize');
// const sequelize = require('./config');

// const Book = sequelize.define('Book', {
//     // Definiowanie atrybutów modelu
//     userId: {
//       type: DataTypes.INTEGER,
//       allowNull: false
//     },
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     author: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     description: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     isOwnedByOwner: {
//       type: DataTypes.BOOLEAN,
//       allowNull: false
//     }
//   });


//   // Opcja { force: true } w sync spowoduje usunięcie tabeli, jeśli już istnieje, a następnie jej ponowne utworzenie
// //   { alter: true }: Pozwala Sequelize na bezpieczne wprowadzanie zmian w istniejącej tabeli, tak aby pasowała do modelu, bez konieczności usuwania danych.
// // { match: /regex/ }: Pozwala na synchronizację tylko tych baz danych, których nazwy pasują do podanego wyrażenia regularnego, zwiększając bezpieczeństwo.

//   Book.sync({ force: true }).then(() => {
//     console.log('Tabela synchronizowana');
//   });

// // Tworzenie nowego użytkownika
// // const createUser = async (username, email, password) => {
// //     try {
// //       await User.create({ username, email, password  });
// //     }catch (error) {
// //       console.error('Błąd:', error);
// //     }
// //   }
  
//   // Wyszukiwanie użytkownika
//   // User.findByPk(1).then(user => {
//   //   console.log(user.firstName);
//   // });

//   // module.exports = {
//   //   createUser
//   // }