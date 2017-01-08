module.exports = { a, b, parseHappinessValue, findBestSeating }

function a (input) {
  const relations = input.trim().split('\n')
  return findBestSeating(relations)
          .totalHappiness
}

function b (input) {
  const relations = input.trim().split('\n')
  return findBestSeating(
    addSelfToRelations(
      relations
    )
  ).totalHappiness
}

function addSelfToRelations (relations) {
  const uniqueNames = relations
                        .map(relation => relation.match(relationRegEx)[1])
                        .filter(keepUnique)

  const you = 'Yourself'

  for (const name of uniqueNames) {
    relations.push(`${name} would gain 0 happiness units by sitting next to ${you}`)
    relations.push(`${you} would gain 0 happiness units by sitting next to ${name}`)
  }

  return relations
}

function keepUnique (item, index, target) {
  return target.indexOf(item) === index
}

function findBestSeating (relations) {
  const seatings = removeDuplicates(
    getAllPossibleSeatings(relations),
    'totalHappiness'
  )

  return findBestItem(seatings, 'totalHappiness')
}

function findBestItem (items, comparsionKey) {
  return items
          .reduce((bestSoFar, item) => {
            if (item[comparsionKey] > bestSoFar[comparsionKey]) {
              return item
            }

            return bestSoFar
          })
}

function getAllPossibleSeatings (rawRelations) {
  const relations = rawRelations.reduce(getAllRelations, {})

  return permute(Object.keys(relations))
          .map((seatOrder, index, seatOrders) => {
            return generateSeating(seatOrder, relations)
          })
}

const relationRegEx = /(\w+) would ([gain|lose]+) (\d+) happiness units by sitting next to (\w+)/

function getAllRelations (relations, relation) {
  const match = relation.match(relationRegEx)
  if (match) {
    relations[match[1]] = relations[match[1]] || {}
    relations[match[1]][match[4]] = parseHappinessValue(match[2], match[3])
  }

  return relations
}

function parseHappinessValue (type, value) {
  if (type === 'gain') {
    return parseInt(value, 10)
  } else {
    return -parseInt(value, 10)
  }
}

function generateSeating (seatOrder, relations) {
  const seating = {
    totalHappiness: 0
  }

  for (let i = 0; i < seatOrder.length; i++) {
    let person2
    if (i < seatOrder.length - 1) {
      person2 = seatOrder[i + 1]
    } else {
      person2 = seatOrder[0]
    }

    seating[seatOrder[i]] = seating[seatOrder[i]] || {}
    if (hasLessThanTwoNeighbours(seating[seatOrder[i]])) {
      seating[seatOrder[i]][person2] = relations[seatOrder[i]][person2]
      seating.totalHappiness += relations[seatOrder[i]][person2]
    }
  }

  // loop backwards to get relations the other way around
  for (let i = seatOrder.length - 1; i >= 0; i--) {
    let person2
    if (i >= 1) {
      person2 = seatOrder[i - 1]
    } else {
      person2 = seatOrder[seatOrder.length - 1]
    }

    seating[seatOrder[i]] = seating[seatOrder[i]] || {}
    if (hasLessThanTwoNeighbours(seating[seatOrder[i]])) {
      seating[seatOrder[i]][person2] = relations[seatOrder[i]][person2]
      seating.totalHappiness += relations[seatOrder[i]][person2]
    }
  }

  return seating
}

function hasLessThanTwoNeighbours (person) {
  return Object.keys(person).length < 2
}

function removeDuplicates (items, key) {
  const found = []

  return items.filter(item => {
    if (found.includes(item[key])) {
      return false
    }

    found.push(item[key])
    return true
  })
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
