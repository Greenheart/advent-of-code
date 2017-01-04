module.exports = { a, b }

function a (input) {
  return simulateGrid(input, GRID_TYPE.LIGHT_SWITCH)
}

function b (input) {
  return simulateGrid(input, GRID_TYPE.BRIGHTNESS)
}

function simulateGrid (input, gridType) {
  initGlobalState(gridType)
  let gridOfActiveLights = {}

  return input
          .split('\n')
          .reduce((totalLit, instruction, index, instructions) => {
            updateGrid(gridOfActiveLights, instruction)

            if (index === instructions.length - 1) {
              switch (GRID_TYPE._ACTIVE) {
                case GRID_TYPE.LIGHT_SWITCH:
                  return Object.keys(gridOfActiveLights)
                          .filter(pos => gridOfActiveLights[pos] === true)
                          .length
                case GRID_TYPE.BRIGHTNESS:
                  return Object.keys(gridOfActiveLights)
                          .reduce((totalBrightness, pos) =>
                            totalBrightness + gridOfActiveLights[pos], 0)
              }
            }
          }, 0)
}

function updateGrid (grid, instruction) {
  const operation = getOperation(instruction)
  const coords = parseCoords(instruction)

  operation(coords, grid)
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

function applyOperation (coords, grid, modifier) {
  for (let x = +coords.start.x; x <= coords.stop.x; x++) {
    for (let y = +coords.start.y; y <= coords.stop.y; y++) {
      const pos = `${x}:${y}`

      switch (GRID_TYPE._ACTIVE) {
        case GRID_TYPE.LIGHT_SWITCH:
          if (typeof modifier === 'boolean') {
            grid[pos] = modifier
          } else {
            grid[pos] = !grid[pos]
          }
          break
        case GRID_TYPE.BRIGHTNESS:
          // Prevent brightness from dropping below 0.
          // Elegant way to assign default value
          grid[pos] = Math.max((grid[pos] || 0) + modifier, 0)
          break
      }
    }
  }
}

function initGlobalState (gridType) {
  GRID_TYPE._ACTIVE = gridType
  OPERATION = AVAILABLE_OPERATIONS[gridType]
  OPERATION_NAMES = Object.keys(OPERATION)
  UNWANTED_STRINGS = getUnwantedStrings()
}

const AVAILABLE_OPERATIONS = {
  LIGHT_SWITCH: {
    'turn on': (coords, grid) => {
      applyOperation(coords, grid, true)
    },
    'toggle': (coords, grid) => {
      applyOperation(coords, grid, 'toggle')
    },
    'turn off': (coords, grid) => {
      applyOperation(coords, grid, false)
    }
  },
  BRIGHTNESS: {
    'turn on': (coords, grid) => {
      applyOperation(coords, grid, 1)
    },
    'toggle': (coords, grid) => {
      applyOperation(coords, grid, 2)
    },
    'turn off': (coords, grid) => {
      applyOperation(coords, grid, -1)
    }
  }
}

const GRID_TYPE = {
  LIGHT_SWITCH: 'LIGHT_SWITCH',
  BRIGHTNESS: 'BRIGHTNESS',
  _ACTIVE: null
}

let OPERATION
let OPERATION_NAMES
let UNWANTED_STRINGS

function getUnwantedStrings () {
  const operationNames = OPERATION_NAMES
                          .map(operation => operation.split(' '))
                          .reduce((operationNames, nameParts) => {
                            nameParts.forEach(str => operationNames.push(str))
                            return operationNames
                          }, [])

  return [...operationNames, 'through']
}

function getOperation (instruction) {
  for (const type of OPERATION_NAMES) {
    if (instruction.startsWith(type)) {
      return OPERATION[type]
    }
  }

  throw new Error('Invalid operation: ', instruction)
}
