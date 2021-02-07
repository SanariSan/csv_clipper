const express = require('express');
const apiRouter = express.Router();

const settings = require('./settings');
apiRouter.get('/settings', settings);

const preview = require('./preview');
apiRouter.get('/preview', preview);

const fallback = require('./fallback');
apiRouter.get('/*+', fallback);

module.exports = apiRouter;