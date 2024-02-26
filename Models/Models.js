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

  const BookRequest = sequelize.define('BookRequest', {
    // Definiowanie atrybutów modelu
    requesterId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    requesterBookId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    requestedBookId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    requestedUserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('pending', 'accepted', 'rejected'),
      defaultValue: 'pending',
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

  // Ustawienie relacji jeden-do-wielu między User a BookRequest jako requester
User.hasMany(BookRequest, { as: 'RequestsMade', foreignKey: 'requesterId' });
BookRequest.belongsTo(User, { as: 'Requester', foreignKey: 'requesterId' });

// Ustawienie relacji jeden-do-wielu między User a BookRequest jako requested user
User.hasMany(BookRequest, { as: 'RequestsReceived', foreignKey: 'requestedUserId' });
BookRequest.belongsTo(User, { as: 'RequestedUser', foreignKey: 'requestedUserId' });

// Ustawienie relacji jeden-do-wielu między Book a BookRequest jako requesterBook
Book.hasMany(BookRequest, { as: 'RequestsMade', foreignKey: 'requesterBookId' });
BookRequest.belongsTo(Book, { as: 'RequesterBook', foreignKey: 'requesterBookId' });

// Ustawienie relacji jeden-do-wielu między Book a BookRequest jako requestedBook
Book.hasMany(BookRequest, { as: 'RequestsReceived', foreignKey: 'requestedBookId' });
BookRequest.belongsTo(Book, { as: 'RequestedBook', foreignKey: 'requestedBookId' });

//   Book.sync({ force: true }).then(() => {
//     console.log('Tabela synchronizowana');
//   });

// sequelize.sync({ force: true });

module.exports = {
    User,
    Book,
    BookRequest
}