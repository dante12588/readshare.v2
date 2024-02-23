const express = require('express');
const hbs  = require('express-handlebars');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const Controllers = require('./Controllers/index');

const app = express();
const port = 4000;

app.use(morgan('dev'));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// session middleware
app.use(session({
    secret: 'jakistamteskt',
    resave: false,
    saveUninitialized: false
  }));

  // middleware to symulate user login
  // just for testing
  // remove in production
  app.use((req, res, next) => {
    req.session.user = 'admin';
    next();
  });

  app.use((req, res, next) => {
    console.log(req.session.user);
    next();
});

// middleware to add messages to res.locals
  app.use((req, res, next) => {
    res.locals.messages = req.session.messages;
    delete req.session.messages;
    console.log( res.locals.messages );
    next();
  });

// Set handlebars as the template engine
// hbs({defaultLayout: 'main'}) not working
app.engine('handlebars', hbs.engine({
    defaultLayout: "main"
  }));
app.set('view engine', 'handlebars');

app.use('/', Controllers);

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
// });

app.use((req, res, next) => {
  // Check if user is logged in and trying to access /login
  if (!req.session.user && req.path !== '/login') {
    return res.redirect('/login');
  }
  //if user is logged in and trying to access /login
  next();
});

if(require.main === module){
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
} else {
    module.exports = app;
}