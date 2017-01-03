if (process.argv.length === 2) {
  console.info('Usage: `node run.js day`')
  process.exit(0)
}

const fs = require('fs')
const path = require('path')

const day = process.argv[2]
const input = fs.readFileSync(path.join(__dirname, `/input/${day}`), 'utf8').trim()
const solution = require(path.join(__dirname, `/solutions/${day}`))

for (const part of ['a', 'b']) {
  console.log(`Day ${day}.${part.toUpperCase()}:\n\t${solution[part](input)}`)
}
