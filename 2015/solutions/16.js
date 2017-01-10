module.exports = { a, b, parseAunts }

const clues = {
  children: 3,
  cats: 7,
  samoyeds: 2,
  pomeranians: 3,
  akitas: 0,
  vizslas: 0,
  goldfish: 5,
  trees: 3,
  cars: 2,
  perfumes: 1
}

function a (input) {
  return findAunt(input, clues).id
}

function b (input, matchRanges = true) {
  return findAunt(input, clues, matchRanges).id
}

function findAunt (input, clues, matchRanges) {
  const aunts = parseAunts(input)

  const matching = aunts.filter(aunt => aunt.matches(clues, matchRanges))

  console.log('matches: ', matching.length)

  return matching[0]
}

function parseAunts (input) {
  return clean(input)
          .map(aunt => {
            const params = cleanAunt(aunt)
                            .reduce((params, param, index, parsed) => {
                              const num = parseInt(param, 10)
                              if (index === 0) {
                                params.id = num
                              } else if (Number.isInteger(num)) {
                                params.clues[parsed[index - 1]] = num
                              } else {
                                params.clues[param] = null
                              }
                              return params
                            }, { clues: {} })

            return new Aunt(params)
          })
}

class Aunt {
  constructor (params) {
    this.id = params.id
    this.clues = {}

    for (const clue in params.clues) {
      this.clues[clue] = params.clues[clue]
    }
  }

  matches (clues, matchRanges) {
    if (matchRanges) return this.matchesRanges(clues)

    return Object.keys(this.clues)
            .every(x => this.clues[x] === clues[x])
  }

  matchesRanges (clues) {
    let cluesMatching = 0

    for (const x of Object.keys(this.clues)) {
      switch (x) {
        case 'cats':
        case 'trees':
          if (this.clues[x] > clues[x]) ++cluesMatching
          break
        case 'pomeranians':
        case 'goldfish':
          if (this.clues[x] < clues[x]) ++cluesMatching
          break
        default:
          if (this.clues[x] === clues[x]) ++cluesMatching
      }
    }

    return cluesMatching >= 3
  }
}

function clean (input) {
  return input.trim().split('\n')
}

const auntUnwantedStrings = /Sue|:|,/g

function cleanAunt (rawAunt) {
  return rawAunt
          .replace(auntUnwantedStrings, '')
          .trim()
          .split(' ')
}
