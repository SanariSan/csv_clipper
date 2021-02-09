const path = require('path');
const apiUrl = '/api';
const ApiPath = {
    settingsUrl: path.join(apiUrl, '/settings'),
    previewsUrl: path.join(apiUrl, '/preview')
};

export default ApiPath;