const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/register', (req, res) => {
    console.log(req.locals);
    res.render('register');
});

router.get('/newpassword', (req, res) => {
    res.render('newpassword');
});

module.exports = router; // export the router