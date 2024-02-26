const router = require('express').Router();
const userController = require('./userController');
const bookController = require('./bookController');
const viewController = require('./viewController');
const errorConroller = require('./errController');

router.use('/', viewController);
router.use('/', userController);
router.use('/', bookController);

//must be last
router.use('/', errorConroller);

module.exports = router;