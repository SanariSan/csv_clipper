const path = require('path');

function applyEnvSettings({ mainDir }) {
    process.env.mainDir = mainDir;
    process.env.binDir = path.join(process.env.mainDir, 'bin');

    process.env.srcDir = path.join(process.env.mainDir, 'src');
    process.env.csvLogicDir = path.join(process.env.srcDir, 'csv_logic');

    process.env.routesDir = path.join(process.env.mainDir, 'routes');
    process.env.routesTestDir = path.join(process.env.routesDir, 'test_req');
    process.env.routesFallbackDir = path.join(process.env.routesDir, 'fallback');

    process.env.apiDir = path.join(process.env.routesDir, 'api');
    process.env.apiFallbackDir = path.join(process.env.apiDir, 'fallback');
    process.env.apiPreviewDir = path.join(process.env.apiDir, 'preview');
    process.env.apiPreviewSingleDir = path.join(process.env.apiPreviewDir, 'single');
    process.env.apiPreviewMultipleDir = path.join(process.env.apiPreviewDir, 'multiple');

    process.env.apiSettingsDir = path.join(process.env.apiDir, 'settings');
    process.env.apiSettingsGetDir = path.join(process.env.apiSettingsDir, 'get');
    process.env.apiSettingsSetDir = path.join(process.env.apiSettingsDir, 'set');

    process.env.runScriptDir = path.join(process.env.apiDir, 'runScript');

    process.env.dataDir = path.join(process.env.mainDir, 'data');
    process.env.filesDir = path.join(process.env.dataDir, 'files');
}

module.exports = {
    applyEnvSettings
};