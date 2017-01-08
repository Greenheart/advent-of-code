module.exports = { a, b }

function a (input, seconds = 2503) {
  const deers = clean(input)
                  .map(parseDeer)

  const results = deers
                  .map(deer => {
                    return getPersonalResult(deer, seconds)
                  })

  return results
          .reduce(getWinner)
          .result
}

function b (input, seconds = 2503) {
  const deers = clean(input)
                  .map(parseDeer)

  return simulateCompetition(deers, seconds)
          .reduce(getWinner)
          .result
}

function getWinner (potential, deer) {
  if (potential.result > deer.result) {
    return potential
  } else {
    return deer
  }
}

function clean (input) {
  return input.trim().split('\n')
}

const reindeerRegEx = /(\w+) can fly (\d+) km\/s for (\d+) seconds, but then must rest for (\d+) seconds./

function parseDeer (input) {
  const match = input.match(reindeerRegEx)
  if (!match) {
    throw new Error('Invalid input: ', input)
  }

  return {
    name: match[1],
    speed: parseInt(match[2], 10),
    flightTime: parseInt(match[3], 10),
    restTime: parseInt(match[4], 10),
    isResting: false,
    remainingTime: parseInt(match[3], 10),
    result: 0,
    distance: 0
  }
}

function getPersonalResult (deer, seconds) {
  return {
    name: deer.name,
    result: calculateDistance(deer, seconds)
  }
}

function calculateDistance (deer, secondsLeft) {
  while (--secondsLeft) {
    updateState(deer)
  }

  return deer.distance
}

function updateState (deer) {
  if (!deer.isResting) deer.distance += deer.speed
  if (!--deer.remainingTime) {
    deer.isResting = !deer.isResting

    if (deer.isResting) {
      deer.remainingTime = deer.restTime
      return
    }

    deer.remainingTime = deer.flightTime
  }
}

function rewardLeaders (deer, i, deers) {
  if (deers.every(otherDeer => deer.distance >= otherDeer.distance)) {
    ++deer.result
  }
}

function simulateCompetition (deers, secondsLeft) {
  while (--secondsLeft) {
    deers.forEach(updateState)
    deers.forEach(rewardLeaders)
  }

  return deers.map(deer => {
    return {
      name: deer.name,
      result: deer.result
    }
  })
}
