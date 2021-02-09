const path = require('path');

function memoize(fn) {
    const cache = Object.create(null);

    return (...args) => { //{fileName, id}
        const fileObj = args[0];
        const action = args[1]; //del
        const key = fileObj.id;
        const val = cache[key];

        if (action === 'del') {
            if (val) {
                console.log('From cache DEL' + key);
                delete cache[key];
                return;
            }
        }

        if (val) {
            console.log('From cache ' + key);
            return val;
        }

        const res = fn(path.join(process.env.mainDir, 'data', 'files', fileObj.fileName), 'UTF-8');
        cache[key] = res;

        console.log('From fs ' + key);

        return res;
    }
}

module.exports = memoize;