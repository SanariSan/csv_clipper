const fs = require('fs');
const path = require('path');

function compareData(dataClipped, csvOutput) {
    let matchedAmount = 0;

    for (let el of dataClipped) {
        if (csvOutput.includes(el)) {
            matchedAmount++;
        }
    }

    console.log('Matched ', matchedAmount);
    return matchedAmount;
}

function init() {
    let dataClipped = fs.readFileSync(path.join(process.env.dataDir, 'clipped.txt'), 'UTF-8').match(/\S+/g);
    let csvOutput = fs.readFileSync(path.join(process.env.dataDir, 'result.csv'), 'UTF-8').match(/\S+/g);

    return Promise.resolve({
        clipped: dataClipped.length,
        result: csvOutput.length,
        matched: compareData(dataClipped, csvOutput)
    });
}

module.exports = init;