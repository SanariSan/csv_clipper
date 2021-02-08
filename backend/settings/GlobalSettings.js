const path = require('path');

const CsvSettings = require(path.join(process.env.csvLogicDir, 'CsvSettings.js'));

function applyGlobalSettings() {
    global.csvSettings = new CsvSettings();
}

module.exports = {
    applyGlobalSettings
};