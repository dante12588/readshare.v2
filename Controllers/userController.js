const router = require('express').Router();
const User = require('../Models/User');

// register new user
router.post('/users/register', async (req, res) => {

    console.log(req.body);

    const username = req.body.username ? req.body.username : '',
    email = req.body.email ? req.body.email : '',
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

    User.getUserByUsername(username)
        .then(user => {
            if(user){
                message.err_password = 'Username already exists';
                message.status = 'error';
                req.session.messages = message;
                // return res.redirect(303, '/register');
            }

            User.getUserByMail(email)
                .then(user => {
                    if(user){
                        message.err_email = 'Email already exists';
                        message.status = 'error';
                        req.session.messages = message;
                        return res.redirect(303, '/register');
                    }

                    if(message.status === 'error'){
                        req.session.messages = message;
                        return res.redirect(303, '/register');
                    }

                    User.addNewUser(username, email, password)
                        .then(user => {
                            console.log('User added' + user.username);
                            return res.redirect(303, '/login');
                        })
                })
        })
        .catch(err => {
            console.log(err);
        });

});
router.get('/login', (req, res) => {
    res.render('login');
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