const router = require('express').Router();
// const User = require('../Models/User');
// const Book = require('../Models/Book');
const Models = require('../Models/Models');

// Book.belongsTo(User, {foreignKey: 'userId'});
// User.hasMany(Book, {foreignKey: 'userId'});

// User.createUser('ni2ck', 'ma2il', 'ha2slo');

router.get('/user', (req, res) => {
   
    res.send('User');
});

module.exports = router;