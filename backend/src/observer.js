const path = require('path');
const chokidar = require('chokidar');

const watcher = chokidar.watch(path.join(rocess.env.mainDir, 'data', 'files'));

watcher
    .on('add', pathToFile => {
        log(`File ${pathToFile} has been added ${path.basename(pathToFile)}`);
        global.csvSettings.addFiles(path.basename(pathToFile));
    })
    .on('unlink', pathToFile => {
        log(`File ${pathToFile} has been removed ${path.basename(pathToFile)}`);
        global.csvSettings.removeFiles(path.basename(pathToFile));
    });

