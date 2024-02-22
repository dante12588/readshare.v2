const express = require('express');
const hbs  = require('express-handlebars');
const hand = require('./lib/handlers');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
// const flash = require('connect-flash');

// configure flash middleware
// app.use(flash());

// // Ustawienie lokalnych zmiennych dla wiadomości flash
// app.use((req, res, next) => {
//     res.locals.messages = req.flash();
//     next();
//   });

// const winston = require('winston');

// const logger = winston.createLogger({
//   level: 'info',
//   format: winston.format.json(),
//   transports: [
//     //
//     // - Write all logs with level `info` and below to `combined.log` 
//     // - Write all logs with level `error` and below to `error.log`.
//     //
//     new winston.transports.File({ filename: 'error.log', level: 'error' }),
//     new winston.transports.File({ filename: 'combined.log' })
//   ]
// });

// logger.add(new winston.transports.Console({
//     format: winston.format.simple()
// }));


const app = express();
const port = 4000;

app.use(morgan('dev'));

app.use(cookieParser());

// session middleware
app.use(session({
    secret: 'jakistamteskt',
    resave: false,
    saveUninitialized: false
  }));

  // configure flash middleware
// app.use(flash());

// Ustawienie lokalnych zmiennych dla wiadomości flash


const Controllers = require('./Controllers/index');


// Set handlebars as the template engine
// hbs({defaultLayout: 'main'}) not working
app.engine('handlebars', hbs.engine({
    defaultLayout: "main"
  }));
app.set('view engine', 'handlebars');

app.get('/', hand.home);

app.get('/about', hand.about);




app.use((req, res, next) => {
  res.locals.messages = req.session.messages;
  delete req.session.messages;
  next();
});

app.use('/', Controllers);

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
// });

if(require.main === module){
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
} else {
    module.exports = app;
}