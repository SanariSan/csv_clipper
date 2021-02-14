const express = require('express');
const apiRouter = express.Router();

const settings = require(process.env.apiSettingsDir);
apiRouter.use('/settings', settings);

const preview = require(process.env.apiPreviewDir);
apiRouter.use('/preview', preview);

const runScript = require(process.env.runScriptDir);
apiRouter.get('/runScript', runScript);

const fallback = require(process.env.apiFallbackDir);
apiRouter.get('/*+', fallback);

module.exports = apiRouter;