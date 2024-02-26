const router = require('express').Router();
const userController = require('./userController');
const bookController = require('./bookController');
const bookRequestController = require('./bookRequestController');

const viewController = require('./viewController');
const errorConroller = require('./errController');

router.use('/', viewController);
router.use('/', userController);
router.use('/', bookController);
router.use('/', bookRequestController);

//must be last
router.use('/', errorConroller);

module.exports = router;