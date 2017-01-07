if (process.argv.length === 2) {
  console.info('Usage: `node run.js day`')
  process.exit(0)
}

const fs = require('fs')
const path = require('path')

const day = process.argv[2]
const input = fs.readFileSync(path.join(__dirname, `/input/${day}`), 'utf8').trim()
const solution = require(path.join(__dirname, `/solutions/${day}`))

// Additional data required to run some solutions.
const EXTRA_ARGUMENTS = {
  '7': {
    'a': ['a'],
    'b': ['a']
  }
}

for (const part of ['a', 'b']) {
  const result = execute(solution, day, part, input, EXTRA_ARGUMENTS)
  console.log(`Day ${day}.${part.toUpperCase()}:\n\t${JSON.stringify(result)}`)
}

function execute (solution, day, part, input, args) {
  if (args[day] && args[day][part]) {
    return solution[part](input, ...args[day][part])
  }

  return solution[part](input)
}
