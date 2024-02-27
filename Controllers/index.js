const router = require('express').Router();
const userController = require('./userController');
const bookController = require('./bookController');
const bookRequestController = require('./bookRequestController');
const messageController = require('./messageController');
const bookExchangeController = require('./bookExchangeController');

const viewController = require('./viewController');
const errorConroller = require('./errController');

router.use('/', viewController);
router.use('/', userController);
router.use('/', bookController);
router.use('/', bookRequestController);
router.use('/', messageController);
router.use('/', bookExchangeController);

//must be last
router.use('/', errorConroller);

module.exports = router;