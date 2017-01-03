module.exports = { a, b }

function updatePosition (santa, instruction) {
  const pos = Object.assign({}, santa)

  switch (instruction) {
    case '>':
      ++pos.x
      break
    case '<':
      --pos.x
      break
    case '^':
      ++pos.y
      break
    case 'v':
      --pos.y
      break
    default:
      throw new Error('invalid instruction: ' + instruction)
  }

  return pos
}

function visit (santa, visited) {
  const _visited = Object.assign({}, visited)
  const coords = `${santa.x}:${santa.y}`
  if (_visited[coords]) {
    ++_visited[coords]
  } else {
    _visited[coords] = 1
  }

  return _visited
}

function a (input) {
  let visited = {
    '0:0': 1  // The starting position is already visited.
  }

  let santa = {
    x: 0,
    y: 0
  }

  return input
          .split('')
          .reduce((uniqueHouses, instruction) => {
            santa = updatePosition(santa, instruction)
            visited = visit(santa, visited)

            return Object.keys(visited).length
          }, Object.keys(visited).length)
}

function b (input) {
  let visited = {
    '0:0': 2  // Both santa and robo santa have visited the starting position.
  }

  let santa = {
    x: 0,
    y: 0
  }

  let roboSanta = {
    x: 0,
    y: 0
  }

  const santas = [santa, roboSanta]

  return input
          .split('')
          .reduce((uniqueHouses, instruction, instructionNumber) => {
            santas[instructionNumber % 2] = updatePosition(santas[instructionNumber % 2], instruction)
            visited = visit(santas[instructionNumber % 2], visited)

            return Object.keys(visited).length
          }, Object.keys(visited).length)
}
