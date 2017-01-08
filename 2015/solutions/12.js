module.exports = { a, b }

function a (input) {
  const match = input.match(numberRegEx)
  return sum(match)
}

function b (input, unwantedKey) {
  return _b(JSON.parse(input), unwantedKey)
}

function _b (input, unwantedKey) {
  let total = 0

  if (!unwantedKey || isClean(input, unwantedKey)) {
    for (const key in input) {
      if (input.hasOwnProperty(key)) {
        if (typeof input[key] === 'object') {
          total += _b(input[key], unwantedKey)
        } else if (typeof input[key] === 'number') {
          total += input[key]
        }
      }
    }
  }

  return total
}

function isClean (input, unwantedKey) {
  if (input.constructor !== Array) {
    for (const key in input) {
      if (input[key] === unwantedKey) {
        return false
      }
    }
  }

  return true
}

const numberRegEx = /(-?\d+)/g

function sum (match) {
  if (match) {
    return match
            .map(n => parseInt(n, 10))
            .reduce((total, num) => total + num, 0)
  }

  return 0
}
