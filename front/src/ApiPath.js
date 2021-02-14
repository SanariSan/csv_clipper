const path = require('path');
const apiUrl = '/api';
const ApiPath = {
    runScriptUrl: path.join(apiUrl, '/runScript'),
    setSettingsUrl: path.join(apiUrl, '/settings/set'),
    getSettingsUrl: path.join(apiUrl, '/settings/get'),
    getPreviewsUrl: path.join(apiUrl, '/preview')
};

export default ApiPath;