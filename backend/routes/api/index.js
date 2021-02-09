const express = require('express');
const apiRouter = express.Router();

const settings = require(process.env.apiSettingsDir);
apiRouter.get('/settings', settings);

const preview = require(process.env.apiPreviewDir);
apiRouter.use('/preview', preview);

const fallback = require(process.env.apiFallbackDir);
apiRouter.get('/*+', fallback);

module.exports = apiRouter;