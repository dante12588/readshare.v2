const fortune = require('./fortune.js');

exports.home = (req, res) => {
    res.render('home', {
        title: 'Home',
        name: 'John Doe'
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