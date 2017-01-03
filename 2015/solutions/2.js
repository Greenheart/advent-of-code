module.exports = { a, b }

function a (input) {
  return input
          .split('\n')
          .reduce((total, dimensions) => {
            const sides = dimensions
                            .split('x')
                            .map(n => parseInt(n, 10))

            // 1. Calculate wrapping paper for each side
            const A = sides[0] * sides[1]
            const B = sides[1] * sides[2]
            const C = sides[0] * sides[2]
            const wrapping = 2 * A + 2 * B + 2 * C

            // 2. Add smallest side again
            const slack = [A, B, C].sort((a, b) => a - b)[0]
            return total + wrapping + slack
          }, 0)
}

function b (input) {
  return input
          .split('\n')
          .reduce((total, dimensions) => {
            const sides = dimensions
                            .split('x')
                            .map(n => parseInt(n, 10))

            // 1. Ribbon for the present
            sides.sort((a, b) => a - b)

            const forPresent = 2 * sides[0] + 2 * sides[1]

            // 2. Ribbon for the bow
            const forBow = sides[0] * sides[1] * sides[2]

            return total + forPresent + forBow
          }, 0)
}
