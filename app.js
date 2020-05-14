const express = require('express');
const flash = require('connect-flash');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const PORT = 5050; //bind to port
const app = express(); // init app
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));

  //init routes
app.use('/',require('./routes/users'));

app.listen(PORT,console.log(`server started at port ${PORT}`)); // start server on {PORT}
var server = app.listen(process.env.PORT || 5050, function () {
  var port = server.address().port;
  console.log("Express is working on port " + port);
});
module.exports = app;

