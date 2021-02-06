const path = require('path');

function applySettings({ mainDir }) {
    process.env.mainDir = mainDir;
    process.env.csvLogicDir = path.join(mainDir, '/csv_logic');
    process.env.settings = JSON.parse(fs.readFileSync('./settings.json', 'UTF-8'));
}

module.exports = applySettings;