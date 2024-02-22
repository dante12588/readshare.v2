const router = require('express').Router();
// const User = require('../Models/User');
// const Book = require('../Models/Book');
// const Models = require('../Models/Models');

// Book.belongsTo(User, {foreignKey: 'userId'});
// User.hasMany(Book, {foreignKey: 'userId'});

// User.createUser('ni2ck', 'ma2il', 'ha2slo');


// register new user
router.post('/users/register', (req, res) => {
    req.session.messages = {
        type: 'success',
        intro: 'Thank you!',
        message: 'You have now'
    };
    res.redirect(303, '/register');
});

router.get('/register', (req, res) => {
    res.render('register');
});

// login user
router.post('/users/login', (req, res) => {
    res.send('login');
});

// get user by id
router.get('/users/:userid', (req, res) => {
    res.send('get user by id');
});

// update user by id
router.put('/users/:userid', (req, res) => {
    res.send('update user by id');
});

// delete user by id
router.delete('/users/:userid', (req, res) => {
    res.send('delete user by id');
});

module.exports = router;