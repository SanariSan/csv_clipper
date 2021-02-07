const express = require('express');
const routes = express.Router();

const apiRouter = require('./api');
routes.use('/api', apiRouter);

const testRouter = require('./test_req');
routes.use('/test_req', testRouter);

const fallback = require('./fallback');
routes.use('/*+', fallback);

module.exports = routes;
