module.exports = { a, b }

function a (input) {
  return input
          .split('')
          .reduce((floor, instruction) => {
            if (instruction === '(') {
              return ++floor
            } else if (instruction === ')') {
              return --floor
            } else {
              console.error('invalid instruction: ', instruction)
            }
          }, 0)
}

function b (input) {
  let floor = 0
  return input
          .split('')
          .findIndex((instruction, i) => {
            if (instruction === '(') {
              ++floor
            } else if (instruction === ')') {
              --floor
            } else {
              console.error('invalid instuction: ', instruction)
            }

            return floor < 0
          }) + 1
}
