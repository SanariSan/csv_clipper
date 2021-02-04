const fs = require('fs');

function compareLength(dataClipped, csvOutput) {
    console.log('TXT ', dataClipped.length);
    console.log('CSV ', csvOutput.length);
}

function compareData(dataClipped, csvOutput) {
    let matchedAmount = 0;

    dataClipped.forEach(el => {
        if (csvOutput.includes(el)) {
            matchedAmount++;
        }
    })
    console.log('Matched ', matchedAmount);

    let clippedSet = new Set(dataClipped);
    let csvSet = new Set(csvOutput);

    if (clippedSet.length < dataClipped.length || csvSet.length < csvOutput.length) {
        console.log('Diplicates is result file!!!');
    }
}

function init() {
    let dataClipped = fs.readFileSync('./clipped.txt', 'UTF-8').match(/\S+/g);
    let csvOutput = fs.readFileSync('./test_new.csv', 'UTF-8').match(/\S+/g);

    compareLength(dataClipped, csvOutput);
    compareData(dataClipped, csvOutput);
}

init();