const fs = require('fs');
const path = require('path');
const { nanoid } = require('nanoid');

class CsvSettings {
    constructor() {
        this.csvSettings = JSON.parse(fs.readFileSync(path.join(process.env.csvLogicDir, 'CsvSettings.json'), 'UTF-8'));//!!!!! route
        this.files = CsvSettings.formatFiles(fs.readdirSync(path.join(process.env.mainDir, 'data', 'files')));
    }

    static formatFiles(x) {
        return filesNamesArr.map()
    }

    addFile(fileName) {
        let match = this.files.find(_ => _.fileName === fileName);

        if (!match) {
            this.files.push({
                fileName,
                id: nanoid()
            })
        }
    }

    addFiles(filesNamesArr) {
        let match = this.files.find(_ => _.fileName === fileName);

        if (!match) {
            this.files.push({
                fileName,
                id
            })
        }
    }

    removeFile(fileName) {
        let match = this.files.findIndex(_ => _.fileName === fileName);

        if (match !== -1) {
            this.files.splice(match, 1);
        }
    }

    removeFiles(filesNamesArr) {
        let match = this.files.findIndex(_ => _.fileName === fileName);

        if (match !== -1) {
            this.files.splice(match, 1);
        }
    }
}

module.exports = CsvSettings;