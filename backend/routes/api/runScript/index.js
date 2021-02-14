const path = require('path');
const mainScript = require(path.join(process.env.csvLogicDir, 'index.js'));
const clip = require(path.join(process.env.csvLogicDir, 'clip.js'));
const compare = require(path.join(process.env.csvLogicDir, 'compare.js'));

module.exports = async (req, res, next) => {
    mainScript()
        .then(clip)
        .then(compare)
        .then(({ clipped, result, matched }) => res.json({
            status: 'OK',
            data: { clipped, result, matched }
        }))
};