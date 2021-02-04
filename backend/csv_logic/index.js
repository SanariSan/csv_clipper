require('dotenv').config();

const ExcelJS = require('exceljs');
const fs = require('fs');
const path = require('path');
const dataDir = 'data';
const filesDir = path.join(dataDir, 'files');
const TEMPLATE_BREAK = '^\\S+_quantity';
const QTY_TEMPLATE = '(?<=quantity_)\\d+';
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
        let match = curr.match(new RegExp(QTY_TEMPLATE, 'g'));
        if (match !== null) {
            match = match[0];
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
    let template = fileName.match(new RegExp(TEMPLATE_BREAK));

    if (template !== null) {
        template = template[0];
    }
    else {
        throw Error('BAD TEMPLATE, NO MATCHES');
    }

    return filesNamesArr.filter(_ => _.match(new RegExp(template)));
}

async function init(mainDir) {

    const unitedWorkbook = new ExcelJS.Workbook();
    const unitedSheet = unitedWorkbook.addWorksheet('Name');

    const unsortedFilesNamesArr = fs.readdirSync(path.join(mainDir, filesDir), { withFileTypes: true })
        .filter(_ => _.isFile())
        .map(_ => _.name);

    const filesNamesArr = sortByQty(unsortedFilesNamesArr);

    const filesNamesSet = new Set(filesNamesArr);

    let c = 1;
    for await (let fileName of filesNamesSet) {
        let allParts = getAllParts(filesNamesArr, fileName);
        let partsValuesArr = [];

        for await (let filePart of allParts) {
            console.log(filePart);

            const workbook = new ExcelJS.Workbook();
            await workbook.csv.readFile(path.join(mainDir, filesDir, filePart), {
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

    await unitedWorkbook.csv.writeFile(path.join(mainDir, dataDir, 'result.csv'), {
        formatterOptions: {
            ...uniOpts,
            headers: true
        }
    });
}

module.exports = init;