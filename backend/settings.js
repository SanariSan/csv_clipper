const fs = require('fs');
const path = require('path');

function applyBasicSettings({ mainDir }) {
    process.env.mainDir = mainDir;
    process.env.csvLogicDir = path.join(mainDir, '/src/csv_logic');
    process.env.settings = fs.readFileSync('./settings.json', 'UTF-8');
}

function modifyEnvValue(key, value) {
    process.env[key] = value;
}

module.exports = {
    applyBasicSettings,
    modifyEnvValue
};