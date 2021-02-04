const fs = require('fs');
const path = require('path');

const filesDir = './files';
function init() {
    const filesNamesArr = fs.readdirSync(filesDir, { withFileTypes: true })
        .filter(_ => _.isFile())
        .map(_ => _.name);

    let filesData = ``;

    filesNamesArr.forEach(_ => {
        let data = fs.readFileSync(path.join(filesDir, _), 'UTF-8');
        filesData += data + '\n';
    });

    fs.writeFileSync('./clipped.txt', filesData);

}

init();