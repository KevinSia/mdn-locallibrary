var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// ## VIEW ENGINE SETUP

app.set('views', path.join(__dirname, 'views')); // view location
app.set('view engine', 'pug'); // view engine to use

// ## APP MIDDLEWARE

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev')); // logging
app.use(bodyParser.json()); // parse request body in json format
app.use(bodyParser.urlencoded({ extended: false })); // parse request body in html format
app.use(cookieParser()); // parse cookie
app.use(express.static(path.join(__dirname, 'public'))); // set static assets path to public

// ## ROUTER MIDDLEWARES
app.use('/', index); 
app.use('/users', users);

// ## ERROR HANDLING MIDDLEWARES

// catch 404 and forward to error handler
// eg. route/static assets not found
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
