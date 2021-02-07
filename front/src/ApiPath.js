const path = require('path');

const UrlApi = '/api';
const ApiPath = {
    UrlSettings: path.join(UrlApi, '/settings'),
    UrlPreviews: path.join(UrlApi, '/preview')
};

export default ApiPath;