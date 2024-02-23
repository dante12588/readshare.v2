const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home');
});

module.exports = router; // export the router