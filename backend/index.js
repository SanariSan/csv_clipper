const path = require('path');

(require(path.join(__dirname, 'settings', 'EnvSettings.js'))).applyEnvSettings({ mainDir: __dirname });
(require(path.join(__dirname, 'settings', 'GlobalSettings.js'))).applyGlobalSettings();

require(path.join(process.env.binDir, 'www.js'))();