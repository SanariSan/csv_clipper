const fs = require('fs');
const path = require('path');
const { nanoid } = require('nanoid');

const memoize = require(path.join(process.env.csvLogicDir, 'memoize.js'));
const memoReadFile = memoize(fs.readFileSync);

function formatFile(fileName) {
    let formatted = {
        fileName,
        id: nanoid()
    }
    memoReadFile(formatted);

    return formatted;
}

class CsvControl {
    constructor() {
        this.csvSettings = JSON.parse(fs.readFileSync(path.join(process.env.csvLogicDir, 'CsvSettings.json'), 'UTF-8'));//!!!!! route
        this.files = fs.readdirSync(path.join(process.env.mainDir, 'data', 'files')).map(formatFile);
    }

    getFile(id) {
        return memoReadFile({ id });
    }

    addFile(fileName) {
        let match = this.files.find(_ => _.fileName === fileName);

        if (!match) {
            this.files.push(formatFile(fileName));
        }
    }

    removeFile(fileName) {
        let match = this.files.findIndex(_ => _.fileName === fileName);

        if (match !== -1) {
            memoReadFile(this.files[match], 'del');
            this.files.splice(match, 1);
        }
    }
}

module.exports = CsvControl;