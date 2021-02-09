const express = require('express');
const logger = require('morgan');
const routes = require(process.env.routesDir);

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.sendStatus(500);
});

module.exports = app;
