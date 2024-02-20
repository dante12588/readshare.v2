const router = require('express').Router();
const User = require('../Models/User');

router.get('/user', (req, res) => {
   
    res.send('User');
});

module.exports = router;