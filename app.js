var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var loginRouter = require('./routes/login');
var locatairesRouter = require('./routes/locataires');

var app = express();

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);

app.use('/api/locataires', locatairesRouter);

//app.use(sql);

module.exports = app;
