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