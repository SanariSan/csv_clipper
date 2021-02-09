const path = require('path');
const chokidar = require('chokidar');

const watcher = chokidar.watch(path.join(rocess.env.mainDir, 'data', 'files'));

watcher
    .on('add', pathToFile => {
        log(`File ${pathToFile} has been added`);

        if (typeof pathToFile === 'string')
            global.csvSettings.addFile(path.basename(pathToFile));

        if (typeof pathToFile === 'object')
            pathToFile.forEach(_ => global.csvSettings.addFile(path.basename(_)));
    })
    .on('unlink', pathToFile => {
        log(`File ${pathToFile} has been removed`);

        if (typeof pathToFile === 'string')
            global.csvSettings.removeFile(path.basename(pathToFile));

        if (typeof pathToFile === 'object')
            pathToFile.forEach(_ => global.csvSettings.removeFile(path.basename(_)));
    });

module.exports = watcher;