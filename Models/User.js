const { DataTypes } = require('sequelize');
const sequelize = require('./config');

const User = sequelize.define('User', {
    // Definiowanie atrybutów modelu
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull domyślnie jest true
    },
  });

// Tworzenie nowego użytkownika
User.create({
    firstName: 'Jan',
    lastName: 'Kowalski'
  }).then(user => console.log(user.id));
  
  // Wyszukiwanie użytkownika
  // User.findByPk(1).then(user => {
  //   console.log(user.firstName);
  // });