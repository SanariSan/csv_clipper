// require('dotenv').config();

const ExcelJS = require('exceljs');
const fs = require('fs');
const path = require('path');
const uniOpts = {
    delimiter: '\t',
    headers: false,
    quote: false,
    escape: false,
    ignoreEmpty: true,
    discardUnmappedColumns: true,
    strictColumnHandling: false,
};

function groupByTemplate(filesNamesArr) {
    let filesNamesSet = new Set(filesNamesArr);
    let filesNamesArrGroups = [];

    for (let fileName of filesNamesSet) {
        let allParts = getAllParts(filesNamesArr, fileName);

        filesNamesArrGroups.push([...allParts]);

        allParts.forEach(fileName => filesNamesSet.delete(fileName));
    }

    return filesNamesArrGroups;
}

function getSum(x) {
    return x.reduce((acc, curr) => {
        let match = curr.match(new RegExp(global.csvControl.csvSettings.clip.sortNamePattern));
        if (match !== null && match.length > 0) {
            match = match[1];
        }

        return acc + +match;
    }, 0);
}

function sorter(a, b) {
    let sumA = getSum(a);
    let sumB = getSum(b);

    return sumA < sumB ? 1 :
        sumA > sumB ? -1 : 0;
}

function sortByQty(filesNamesArr) {
    let filesNamesArrGroups = groupByTemplate(filesNamesArr);

    filesNamesArrGroups.sort(sorter);
    filesNamesArrGroups.forEach(_ => console.log(getSum(_)));

    let filesNamesArrUnfolded = [];

    filesNamesArrGroups.forEach(_ => {
        filesNamesArrUnfolded.push(..._);
    });

    console.log(filesNamesArrUnfolded);
    return filesNamesArrUnfolded;
}

function getAllParts(filesNamesArr, fileName) {
    let template = fileName.match(new RegExp(global.csvControl.csvSettings.clip.clipNamePattern));

    if (template !== null && template.length > 0) {
        template = template[1];
    }
    else {
        throw Error('BAD TEMPLATE, NO MATCHES');
    }

    return filesNamesArr.filter(_ => _.match(new RegExp(template)));
}

async function init() {

    const unitedWorkbook = new ExcelJS.Workbook();
    const unitedSheet = unitedWorkbook.addWorksheet('Name');

    const unsortedFilesNamesArr = fs.readdirSync(process.env.filesDir, { withFileTypes: true })
        .filter(_ => _.isFile())
        .map(_ => _.name);

    const filesNamesArr = sortByQty(unsortedFilesNamesArr);

    const filesNamesSet = new Set(filesNamesArr);

    let c = 1;
    for (let fileName of filesNamesSet) {
        let allParts = getAllParts(filesNamesArr, fileName);
        let partsValuesArr = [];

        for (let filePart of allParts) {
            console.log(filePart);

            const workbook = new ExcelJS.Workbook();
            await workbook.csv.readFile(path.join(process.env.filesDir, filePart), {
                parserOptions: uniOpts
            });

            workbook.eachSheet((worksheet) => {
                let valuesArr = worksheet.getColumn(1).values;
                if (valuesArr.length > 0) {
                    partsValuesArr.push(...valuesArr.filter(_ => _ !== undefined ? true : false));
                }
            });

            console.log('done ' + filePart);
        }
        console.log('-------');

        unitedSheet.getColumn(c).values = [`name${c}`, ...partsValuesArr];

        c++;
        allParts.forEach(fileName => filesNamesSet.delete(fileName));
    }

    await unitedWorkbook.csv.writeFile(path.join(process.env.dataDir, 'result.csv'), {
        formatterOptions: {
            ...uniOpts,
            headers: true
        }
    });
}

module.exports = init;