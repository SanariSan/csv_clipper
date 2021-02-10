const path = require('path');
const chokidar = require('chokidar');

const watcher = chokidar.watch(path.join(process.env.mainDir, 'data', 'files'));

watcher
    .on('add', pathToFile => {
        console.log(`File ${pathToFile} has been added`);

        if (typeof pathToFile === 'string')
            global.csvControl.addFile(path.basename(pathToFile));

        if (typeof pathToFile === 'object')
            pathToFile.forEach(_ => global.csvControl.addFile(path.basename(_)));
    })
    .on('unlink', pathToFile => {
        console.log(`File ${pathToFile} has been removed`);

        if (typeof pathToFile === 'string')
            global.csvControl.removeFile(path.basename(pathToFile));

        if (typeof pathToFile === 'object')
            pathToFile.forEach(_ => global.csvControl.removeFile(path.basename(_)));
    });

module.exports = watcher;