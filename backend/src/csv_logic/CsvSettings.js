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

function readSettings() {
    return JSON.parse(fs.readFileSync(path.join(process.env.csvLogicDir, 'CsvSettings.json'), 'UTF-8'));
}

function saveSettings(newSettings) {
    fs.writeFileSync(path.join(process.env.csvLogicDir, 'CsvSettings.json'), JSON.stringify(newSettings, null, '\t'));
}

class CsvControl {
    constructor() {
        this.csvSettings = readSettings();
        this.files = [];
    }

    getFile(id) {
        return memoReadFile({ id });
    }

    addFile(fileName) {
        let match = this.files.find(_ => _.fileName === fileName);

        if (!match) {

            try {
                let formatted = formatFile(fileName);
                this.files.push(formatted);
            }
            catch (e) {
                console.warn('Couldn\'t read file ' + e.fileName);
            }

        }
    }

    removeFile(fileName) {
        let match = this.files.findIndex(_ => _.fileName === fileName);

        if (match !== -1) {
            memoReadFile(this.files[match], 'del');
            this.files.splice(match, 1);
        }
    }

    checkValid(inner) {
        let ogKeys = Object.keys(this.csvSettings);
        let innerKeys = Object.keys(inner);

        if (ogKeys.length === innerKeys.length) {
            let keysToCompare = 0;

            for (let key of innerKeys) {
                if (ogKeys.includes(key))
                    keysToCompare++;
            }

            if (keysToCompare === ogKeys.length) {
                return true;
            }
        }

        return false;
    }

    updSettings(settings) {
        if (this.checkValid(settings)) {
            this.csvSettings = settings;
            saveSettings(settings);

            return true;
        }

        return false;
    }
}



module.exports = CsvControl;