const router = require('express').Router();
const userController = require('./userController');

router.use('/', userController);

module.exports = router;