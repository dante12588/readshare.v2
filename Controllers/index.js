const router = require('express').Router();
const userController = require('./userController');
const viewController = require('./viewController');
const errorConroller = require('./errController');

router.use('/', viewController);
router.use('/', userController);

//must be last
router.use('/', errorConroller);

module.exports = router;