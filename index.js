const express = require('express');
const hbs  = require('express-handlebars');
const hand = require('./lib/handlers');
const morgan = require('morgan');
const Controllers = require('./Controllers/index');

const app = express();
const port = 4000;

app.use(morgan('dev'));

// Set handlebars as the template engine
// hbs({defaultLayout: 'main'}) not working
app.engine('handlebars', hbs.engine({
    defaultLayout: "main"
  }));
app.set('view engine', 'handlebars');

app.get('/', hand.home);

app.get('/about', hand.about);


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