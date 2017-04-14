module.exports = { a, b }

function a (input) {
  let gridOfActiveLights = {}

  return input
          .split('\n')
          .reduce((totalLit, instruction, index, instructions) => {
            gridOfActiveLights = updateGrid(gridOfActiveLights, instruction)

            if (index === instructions.length - 1) {
              return Object.keys(gridOfActiveLights)
                      .filter(pos => gridOfActiveLights[pos] === true)
                      .length
            }
          }, 0)
}

function updateGrid (grid, instruction) {
  let _grid = Object.assign({}, grid)
  const operation = getOperation(instruction)
  const coords = parseCoords(instruction)

  return operation(coords, _grid)
}

function parseCoords (instruction) {
  return instruction
          .split(' ')
          .filter(str => !UNWANTED_STRINGS.includes(str))
          .reduce((coords, pos, index) => {
            const parsed = parsePosition(pos)

            if (index === 0) {
              coords.start = parsed
            } else {
              coords.stop = parsed
            }

            return coords
          }, {})
}

function parsePosition (pos) {
  return pos
          .split(',')
          .map(n => parseInt(n, 10))
          .reduce((coords, coord, index) => {
            if (index === 0) {
              coords.x = coord
            } else {
              coords.y = coord
            }

            return coords
          }, {})
}

function applyOperation (coords, grid, actionType) {
  const _grid = Object.assign({}, grid)

  for (let x = coords.start.x; x <= coords.stop.x; x++) {
    for (let y = coords.start.y; y <= coords.stop.y; y++) {
      const pos = `${x}:${y}`
      if (typeof actionType === 'boolean') {
        _grid[pos] = actionType
      } else {
        _grid[pos] = !_grid[pos]
      }
    }
  }
  return _grid
}

const OPERATION = {
  'turn on': (coords, grid) => {
    return applyOperation(coords, grid, true)
  },
  'toggle': (coords, grid) => {
    return applyOperation(coords, grid, 'toggle')
  },
  'turn off': (coords, grid) => {
    return applyOperation(coords, grid, false)
  }
}

const OPERATIONS = Object.keys(OPERATION)
const UNWANTED_STRINGS = getUnwantedStrings()

function getUnwantedStrings () {
  const operationNames = OPERATIONS
                          .map(operation => operation.split(' '))
                          .reduce((operationNames, nameParts) => {
                            nameParts.forEach(str => operationNames.push(str))
                            return operationNames
                          }, [])

  return [...operationNames, 'through']
}

function getOperation (instruction) {
  for (const type of OPERATIONS) {
    if (instruction.startsWith(type)) {
      return OPERATION[type]
    }
  }

  throw new Error('Invalid operation: ', instruction)
}

function b (input) {

}
