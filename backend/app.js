const express = require('express');
const logger = require('morgan');
const path = require('path');

const indexRouter = require('./routes/index');
const testRouter = require('./routes/test_req');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('./public'));

app.use('/', indexRouter);
app.use('/test_req', testRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.sendStatus(500);
});

module.exports = app;
