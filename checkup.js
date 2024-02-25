const fs = require('fs');
const { TabularRepresentation } = require('./tabularRep.js');
const { BarGraphRepresentation } = require('./barGraphRep.js');

const csvData = fs.readFileSync('data.csv', 'utf-8');

const rows = csvData.split('\n').map(row => row.split(','));

var debarredFromTerm = [];
let maxNameLen = 0;

for (let i = 4; i < rows.length; i++) {
    try {
        let secStr = rows[i][1], rollStr = rows[i][2], nameStr = rows[i][4], leavesStr = rows[i][7]; // Fixed variable name 'leavesStr'
        secStr = secStr.substring(1, secStr.length - 1);
        rollStr = rollStr.substring(1, rollStr.length - 1);
        nameStr = nameStr.substring(1, nameStr.length - 1);
        leavesStr = leavesStr.substring(1, leavesStr.length - 1);
        if (Number(leavesStr) > 12) {
            debarredFromTerm.push({name: nameStr, sec: secStr, roll: rollStr, leaves: leavesStr});
            maxNameLen = (maxNameLen < nameStr.length) ? nameStr.length : maxNameLen; // Fixed maxNameLen assignment
        }
    } catch (error) {
        console.error("Error processing row:", error);
        continue;
    }
}

maxNameLen += 10;

// Uncomment the following line to debug the data and see if it's correctly processed
// console.log(debarredFromTerm);

// Ensure that BarGraphRepresentation is properly implemented and being called with correct parameters
BarGraphRepresentation(debarredFromTerm);
