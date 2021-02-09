const express = require('express');
const previewRouter = express.Router();

const previewMultiple = require(process.env.apiPreviewMultipleDir);
previewRouter.get('/', previewMultiple);

const previewSingle = require(process.env.apiPreviewSingleDir);
previewRouter.get('/:id', previewSingle);

module.exports = previewRouter;