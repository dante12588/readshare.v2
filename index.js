const express = require('express');
const hbs  = require('express-handlebars');
const hand = require('./lib/handlers');

const app = express();

const port = 4000;

// Set handlebars as the template engine
// hbs({defaultLayout: 'main'}) not working
app.engine('handlebars', hbs.engine({
    defaultLayout: "main"
  }));
app.set('view engine', 'handlebars');

app.get('/', hand.home);

app.get('/about', hand.about);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});