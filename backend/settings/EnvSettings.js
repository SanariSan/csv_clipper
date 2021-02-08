const path = require('path');

function applyEnvSettings({ mainDir }) {
    process.env.mainDir = mainDir;
    process.env.csvLogicDir = path.join(mainDir, '/src/csv_logic');
}

module.exports = {
    applyEnvSettings
};