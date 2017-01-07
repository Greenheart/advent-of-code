module.exports = { a, b }

const distanceRegEx = /(\S+) to (\S+) = (\d+)/

function a (input) {
  const routes = getAllPossibleRoutes(input)
  return routes.reduce(findShortestRoute, Number.MAX_SAFE_INTEGER)
}

function b (input) {
  const routes = getAllPossibleRoutes(input)
  return routes.reduce(findLongestRoute, 0)
}

function findShortestRoute (shortestSoFar, route) {
  if (route < shortestSoFar) {
    return route
  }

  return shortestSoFar
}

function findLongestRoute (longestSoFar, route) {
  if (route > longestSoFar) {
    return route
  }

  return longestSoFar
}

function getAllPossibleRoutes (input) {
  const distances = input.trim().split('\n')
                      .reduce(getAllDistances, {})

  return permute(Object.keys(distances))
          .map(route => { return getTotalDistance(route, distances) })
          .filter(keepUnique)
}

function keepUnique (item, index, self) {
  return self.indexOf(item) === index
}

function getTotalDistance (route, distances) {
  return route.reduce((routeSoFar, location) => {
    return {
      previousLocation: location,
      totalDistance: routeSoFar.totalDistance + getDistance(routeSoFar.previousLocation, location, distances)
    }
  }, {previousLocation: null, totalDistance: 0}).totalDistance
}

function getDistance (locationA, locationB, distances) {
  if (locationA) {
    return distances[locationA][locationB]
  }

  return 0
}

function getAllDistances (distances, distance) {
  const match = distance.match(distanceRegEx)
  if (match) {
    distances[match[1]] = distances[match[1]] || {}
    distances[match[1]][match[2]] = parseInt(match[3], 10)
    distances[match[2]] = distances[match[2]] || {}
    distances[match[2]][match[1]] = parseInt(match[3], 10)
  }

  return distances
}

// Recursively generate all possible combinations of an array's items
function permute (array) {
  if (array.length > 1) {
    let newArray = []
    array.forEach((item, index) => {
      permute(array.slice(0, index).concat(array.slice(index + 1)))
        .forEach(newSubArray => {
          newArray.push([item].concat(newSubArray))
        })
    })
    return newArray
  } else {
    return array
  }
}
