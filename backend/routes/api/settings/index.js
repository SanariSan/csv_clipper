const express = require('express');
const settingsRouter = express.Router();

const settingsGet = require(process.env.apiSettingsGetDir);
settingsRouter.get('/get', settingsGet);

const settingsSet = require(process.env.apiSettingsSetDir);
settingsRouter.post('/set', settingsSet);

module.exports = settingsRouter;