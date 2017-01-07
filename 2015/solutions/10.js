module.exports = { a, b }

function a (input, iterations) {
  return generateNthNextSequence(input, iterations).length
}

function b (input, iterations) {
  return generateNthNextSequence(input, iterations).length
}

function generateNthNextSequence (input, iterations = 1) {
  let sequence = input

  do {
    sequence = genereateNextSequence(sequence)
  } while (--iterations > 0)

  return sequence
}

function genereateNextSequence (sequence) {
  let count = 1
  return sequence
    .split('')
    .reduce((newSequence, num, index, original) => {
      if (index > 0) {
        if (num === original[index - 1]) {
          ++count
        } else {
          newSequence += `${count}${original[index - 1]}`
          count = 1
        }
      }

      if (index === original.length - 1) {
        newSequence += `${count}${num}`
      }

      return newSequence
    }, '')
}
