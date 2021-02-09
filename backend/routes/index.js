const express = require('express');
const routes = express.Router();

const apiRouter = require(process.env.apiDir);
routes.use('/api', apiRouter);

const testRouter = require(process.env.routesTestDir);
routes.use('/test_req', testRouter);

const fallback = require(process.env.routesFallbackDir);
routes.use('/*+', fallback);

module.exports = routes;
