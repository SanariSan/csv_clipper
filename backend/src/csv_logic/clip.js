const fs = require('fs');
const path = require('path');

function init() {
    const filesNamesArr = fs.readdirSync(process.env.filesDir, { withFileTypes: true })
        .filter(_ => _.isFile())
        .map(_ => _.name);

    let filesData = ``;

    filesNamesArr.forEach(_ => {
        let data = fs.readFileSync(path.join(process.env.filesDir, _), 'UTF-8');
        filesData += data + '\n';
    });

    fs.writeFileSync(path.join(process.env.dataDir, 'clipped.txt'), filesData);

    return Promise.resolve();
}

module.exports = init;