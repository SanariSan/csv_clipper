const fs = require('fs');
const path = require('path');

function applySettings({ mainDir }) {
    process.env.mainDir = mainDir;
    process.env.csvLogicDir = path.join(mainDir, '/csv_logic');
    process.env.settings = JSON.stringify(require('./settings.json'));
}

module.exports = applySettings;