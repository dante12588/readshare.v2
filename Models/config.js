const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('readshare2', 'root', 'qwer789Qwer', {
  host: 'localhost',
  dialect: 'mysql', // zmień na 'postgres', 'sqlite', 'mariadb', lub 'mssql' w zależności od twojej bazy danych
});

try{
  sequelize.authenticate();
  console.log('\x1b[36m%s\x1b[0m', 'Connection has been established successfully.');
}catch(error){
  console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;