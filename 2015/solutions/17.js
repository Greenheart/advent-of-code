module.exports = { a, b }

const Combinatorics = require('js-combinatorics')

function a (input, targetAmount = 150) {
  return countCombinations(input, targetAmount)
}

function b (input, targetAmount = 150, useFewContainers = true) {
  return countCombinations(input, targetAmount, useFewContainers)
}

function countCombinations (input, targetAmount, useFewContainers = false) {
  const containers = parseContainers(input)
  const powerSet = Combinatorics.power(containers)
  const matches = powerSet.filter(combo => combo.reduce(sumAll, 0) === targetAmount)

  if (!useFewContainers) return matches.length

  const optimalComboSize = matches.reduce(findSmallest, 100)

  return matches.filter(combo => combo.length === optimalComboSize).length
}

function findSmallest (best, combo) {
  if (combo.length < best) {
    return combo.length
  }

  return best
}

function sumAll (a, b) {
  return a + b
}

function clean (input) {
  return input.trim().split('\n')
}

function parseContainers (rawContainers) {
  return clean(rawContainers)
          .map(n => parseInt(n, 10))
}
