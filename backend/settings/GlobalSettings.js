const path = require('path');

const CsvControl = require(path.join(process.env.csvLogicDir, 'CsvSettings.js'));

function applyGlobalSettings() {
    global.csvControl = new CsvControl();
}

module.exports = {
    applyGlobalSettings
};