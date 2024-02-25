const printTableHead = (maxNameLen) => {
    let headerStr = "|"
    for (let i = 0; i < maxNameLen / 2 - 2; i++) {
        headerStr += ' '
    }
    headerStr += "Name"
    let restLen = maxNameLen - headerStr.length
    for (let i = 0; i < restLen; i++) {
        headerStr += ' '
    }
    headerStr += " |  Sec  |  Roll  |  Leaves  |"
    console.log(headerStr)
    headHighlighterStr = ""
    for (let i = 0; i < headerStr.length; i++) {
        headHighlighterStr += '-'
    }
    console.log(headHighlighterStr)
}

const TabularRepresentation = (maxNameLen, debarredFromTerm) => {
    debarredFromTerm.sort((student1, student2) => student2.leaves - student1.leaves)
    console.log('Debarred From 6th sem exam: \n')
    // print table head
    printTableHead(maxNameLen)
    let nameStr, rollStr, leavesStr, restLen
    // print table body 
    for (let i = 0; i < debarredFromTerm.length; i++) {
        tableDataStr = "|"
        // add name
        nameStr = ""
        for (let j = 0; j < (maxNameLen - debarredFromTerm[i].name.length) / 2; j++) {
            nameStr += " "
        }
        nameStr += debarredFromTerm[i].name
        restLen = maxNameLen - nameStr.length
        for (let j = 0; j < restLen; j++) {
            nameStr += " "
        }
        tableDataStr += nameStr + "|"
        // add section
        tableDataStr += "   "
        tableDataStr += debarredFromTerm[i].sec
        tableDataStr += "   "
        tableDataStr += "|"
        // add roll
        rollStr = ""
        for (let j = 0; j < (8 - debarredFromTerm[i].roll.length) / 2; j++) {
            rollStr += " "
        }
        rollStr += debarredFromTerm[i].roll
        restLen = 8 - rollStr.length
        for (let j = 0; j < restLen; j++) {
            rollStr += " "
        }
        tableDataStr += rollStr + "|"
        // add leaves
        leavesStr = ""
        for (let j = 0; j < (10 - debarredFromTerm[i].leaves.toString().length) / 2; j++) {
            leavesStr += " "
        }
        leavesStr += debarredFromTerm[i].leaves
        restLen = 10 - leavesStr.length
        for (let j = 0; j < restLen; j++) {
            leavesStr += " "
        }
        tableDataStr += leavesStr + "|"
        console.log(tableDataStr)
    }

    // print total
    console.log('Total Debarred: ', debarredFromTerm.length)
}

module.exports = {
    TabularRepresentation
}