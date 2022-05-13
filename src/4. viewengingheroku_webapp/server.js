const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000; //grab heroku env variable to get port, else use local port
//also can make this app as script by adding "start": "node server.js" in package.json file so can start server by runnin npm start

var app = express();

hbs.registerPartials(__dirname + '/views/partials')//declaring the headers and footers in view/partiels dir that will be shown in all pages, syntex in hbs is {{> footer}}
app.set('view engine', 'hbs');//letting express module know you are using hbs view engine

app.use((req, res, next) => {//middleware to log server info
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;//log request method and request url

  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) {
      console.log('Unable to append to server.log.');
    }
  });//write log to file
  next();//need this to complete this funtion, to procede
});

// app.use((req, res, next) => {//maintanance middleware so no matter which page navigated, will show maintanance message, MUST add before declaring static server using app.use
//   res.render('maintenance.hbs');
// });


app.use(express.static(__dirname + '/public'));//middleware method , specify path to local directory public where server html pages will be situatated

hbs.registerHelper('getCurrentYear', () => {// registerhelper creates templates for repeated stuff like u want to add date to all page, you just add {{getCurrentYear}} in whereever hbs u want to get current date, prevent repeated code in app.get funtion
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

//handler for http get request
app.get('/', (req, res) => {// forward slash for root of app, function-req store header, body info etc, function-res has methods, data to send data back
  //res.send('<h1>Hello Express!</h1>');//able to use html language viewable in browser
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my website'
  });
});

app.get('/about', (req, res) => {// /about is a route aka about page
  res.render('about.hbs', {//res-render renders the pages created using view engine
    pageTitle: 'About Page',//pass to about.hbs to change it thru js dynimically, must have something like the {{pageTitle}} in about.hps
    pageTitle: 'About Page'
  });
});

app.get('/projects', (req, res) => {
  res.render('projects.hbs', {
    pageTitle: 'Projects'
  });
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

//app.listen(3000);//bind port to localhost:portNum in browser
