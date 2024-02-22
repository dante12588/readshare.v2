const fortune = require('./fortune.js');

exports.home = (req, res) => {
    console.log(req.session.user);
    res.render('home', {
        title: 'Home',
        name: 'John Doe',
        username: req.session.user ? req.session.user : 'Guest'
    });
}

exports.about = (req, res) => {
    res.render('about', {
        title: 'About',
        fortune: fortune.getFortune()
    });
};

exports.notFound = (req, res) => { res.render('404');}

// eslint-disable-next-line no-unused-vars
exports.serverError = (err, req, res, next) => { res.render('500');}