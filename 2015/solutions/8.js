module.exports = { a, b }

const fs = require('fs')
const path = require('path')

const file = fs.readFileSync(path.join(__dirname, '../input/8'), 'utf8')
const lines = file.trim().split('\n')

function a (input) {
  const parsedLength = lines.map(str => eval(str)).reduce(getTotalLength, 0)

  return getTotalLengthOfAllLinesCombined(lines) - parsedLength
}

function b (input) {
  const escapedLength = lines
                          .map(str => str.replace(/\\/g, '\\\\').replace(/"/g, '\\"'))
                          .reduce((total, str) => total + str.length + 2, 0)

  return escapedLength - getTotalLengthOfAllLinesCombined(lines)
}

function getTotalLengthOfAllLinesCombined (lines) {
  return lines.reduce(getTotalLength, 0)
}

function getTotalLength (total, str) {
  return total + str.length
}
