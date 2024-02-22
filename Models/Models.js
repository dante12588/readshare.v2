const { DataTypes } = require('sequelize');
const sequelize = require('./config');


const User = sequelize.define('User', {
    // Definiowanie atrybutów modelu
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  const Book = sequelize.define('Book', {
    // Definiowanie atrybutów modelu
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isOwnedByOwner: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });

// Książka należy do użytkownika
Book.belongsTo(User, {
    foreignKey: 'userId', // klucz obcy w tabeli Book
  });
  
// Użytkownik ma wiele książek
 User.hasMany(Book, {
    foreignKey: 'userId', // klucz obcy w tabeli Book
  });

//   Book.sync({ force: true }).then(() => {
//     console.log('Tabela synchronizowana');
//   });

// sequelize.sync({ force: true });

module.exports = {
    User,
    Book
}