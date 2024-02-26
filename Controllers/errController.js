const router = require('express').Router();

router.use((req, res) => {
    res.status(404).render('404');
});

// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next) => {
    res.status(500).render('500');
});

module.exports = router; // export the router