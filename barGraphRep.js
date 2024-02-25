const countDebarredFromSections = (debarredFromTerm) => {
    let countsFromSection = [], highestHeight = 0, sectionWithMostLeaves = 0
    for (let i = 0; i < debarredFromTerm.length; i++) {
        let index = debarredFromTerm[i].sec.charCodeAt(0) - 65
        if (countsFromSection.length === index + 1) {
            countsFromSection[index]++;
            if (highestHeight < countsFromSection[index]) {
                highestHeight = countsFromSection[index]
                sectionWithMostLeaves = index
            }
        } else {
            countsFromSection.push(1)
            if (highestHeight < countsFromSection[countsFromSection.length - 1]) {
                highestHeight = countsFromSection[countsFromSection.length - 1]
                sectionWithMostLeaves = countsFromSection.length - 1
            }
        }
    }
    return {countsFromSection, highestHeight, sectionWithMostLeaves}
}

const BarGraphRepresentation = (debarredFromTerm) => {
    let {countsFromSection, highestHeight, sectionWithMostLeaves} = countDebarredFromSections(debarredFromTerm)
    
    console.log("Section-wise Debarred students' graph: \n")
    console.log('Maximum students were debarred from: ', String.fromCharCode(sectionWithMostLeaves + 65))
    console.log('\n')
    highestHeight = highestHeight + 10 - (highestHeight % 10)
    const BAR_WIDTH = 7, GAP_BETWEEN_BARS = 14, INITIAL_GAP = 10, SECTIONS = countsFromSection.length, BUFFER = 4
    let barsActive = Array.from(countsFromSection).fill(false)
    for (let height = highestHeight; height >= 1; height--) {
        let barLineDataStr = "|"
        // left to the graph
        let graphPrefix = ""
        if (height % 5 === 0) {
            graphPrefix = height.toString() + "-"
        }
        for (let j = 0; j < INITIAL_GAP - graphPrefix.length; j++) {
            barLineDataStr += " "
        }
        barLineDataStr += graphPrefix + "|"
        for (let j = 0; j < BUFFER; j++) {
            barLineDataStr += " "
        }
        // shape bars horizontally
        for (let j = 0; j < countsFromSection.length; j++) {
            barStr = ""
            if (height === countsFromSection[j]) {
                barsActive[j] = true
            }
            if (barsActive[j]) {
                if (countsFromSection[j] === height) {
                    barStr += "."
                    for (let k = 0; k < BAR_WIDTH; k++) {
                        barStr += "-"
                    }
                    barStr += "."
                } else {
                    barStr += "|"
                    for (let k = 0; k < BAR_WIDTH; k++) {
                        barStr += "*"
                    }
                    barStr += "|"
                }
            } else {
                for (let k = 0; k < (BAR_WIDTH + 1) / 2; k++) {
                    barStr += " "
                }
                if (height - 1 === countsFromSection[j]) {
                    barStr += String.fromCharCode(j + 65)
                } else {
                    barStr += " "
                }
                for (let k = 0; k < (BAR_WIDTH + 1) / 2; k++) {
                    barStr += " "
                }
            }
            for (let k = 0; k < GAP_BETWEEN_BARS; k++) {
                barStr += " "
            }
            barLineDataStr += barStr
        }

        console.log(barLineDataStr)
    }

    let bottomGraphOutlineStr = "|"
    for (let i = 0; i < INITIAL_GAP - 2; i++) {
        bottomGraphOutlineStr += " "
    }
    bottomGraphOutlineStr += "0 "
    for (let i = 0; i < SECTIONS * BAR_WIDTH + (SECTIONS - 1) * GAP_BETWEEN_BARS + INITIAL_GAP + BUFFER * 2; i++) {
        bottomGraphOutlineStr += "-"
    }
    console.log(bottomGraphOutlineStr, "\n\n")
}

module.exports = {
    BarGraphRepresentation
}