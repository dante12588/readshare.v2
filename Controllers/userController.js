const router = require('express').Router();
const User = require('../Models/User');
// const User = require('../Models/User');
// const Book = require('../Models/Book');
// const Models = require('../Models/Models');

// Book.belongsTo(User, {foreignKey: 'userId'});
// User.hasMany(Book, {foreignKey: 'userId'});

// User.createUser('ni2ck', 'ma2il', 'ha2slo');


// register new user
router.post('/users/register', (req, res) => {
    const username = req.body.username,
          email = req.body.email,
          password = req.body.password,
          message = {};

    if(!username){
        message.err_username = 'Username is required';
        message.status = 'error';
    }
    if(!email){
        message.err_email = 'Email is required';
        message.status = 'error';
    }
    if(!password){
        message.err_password = 'Password is required';
        message.status = 'error';
    }

    if(message.status === 'error'){
        req.session.messages = message;
        return res.redirect(303, '/register');
    }

    User.addNewUser(username, email, password)
    .then(() =>{
        console.log("\nDodano użytkownika do bazy danych\n");
    })
    .catch(() => {
        console.log("\nNie udało się dodać użytkownika do bazy danych\n");
    });

    return res.redirect(303, '/register');

});

router.get('/register', (req, res) => {
    console.log(req.locals);
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