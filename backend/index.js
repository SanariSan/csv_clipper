// const path = require('path');
// const EnvSettings = path.join('./settings/EnvSettings.js');
// const GlobalSettings = path.join(__dirname, 'settings', 'GlobalSettings.js');

(require('./settings/EnvSettings.js')).applyEnvSettings({ mainDir: __dirname });
(require('./settings/GlobalSettings.js')).applyGlobalSettings();
require('./src/observer.js');

// const www = path.join();

(require('./bin/www.js'))();