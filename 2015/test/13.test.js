const test = require('tape')

test('Day 13.A - Optimal Seating', t => {
  const day13 = require('../solutions/13')

  t.comment('parseHappinessValue()')
  t.equal(day13.parseHappinessValue('gain', 88), 88)
  t.equal(day13.parseHappinessValue('lose', 10), -10)

  t.comment('Find best seating')
  const expectedSeating = {
    'Alice': {
      'David': -2,
      'Bob': 54
    },
    'Bob': {
      'Alice': 83,
      'Carol': -7
    },
    'Carol': {
      'Bob': 60,
      'David': 55
    },
    'David': {
      'Alice': 46,
      'Carol': 41
    },
    totalHappiness: 330
  }
  t.deepEqual(day13.findBestSeating(`Alice would gain 54 happiness units by sitting next to Bob.
Alice would lose 79 happiness units by sitting next to Carol.
Alice would lose 2 happiness units by sitting next to David.
Bob would gain 83 happiness units by sitting next to Alice.
Bob would lose 7 happiness units by sitting next to Carol.
Bob would lose 63 happiness units by sitting next to David.
Carol would lose 62 happiness units by sitting next to Alice.
Carol would gain 60 happiness units by sitting next to Bob.
Carol would gain 55 happiness units by sitting next to David.
David would gain 46 happiness units by sitting next to Alice.
David would lose 7 happiness units by sitting next to Bob.
David would gain 41 happiness units by sitting next to Carol.`.trim().split('\n')), expectedSeating)

  t.comment('Get happiness value for optimal seating')
  t.equal(day13.a(`Alice would gain 54 happiness units by sitting next to Bob.
Alice would lose 79 happiness units by sitting next to Carol.
Alice would lose 2 happiness units by sitting next to David.
Bob would gain 83 happiness units by sitting next to Alice.
Bob would lose 7 happiness units by sitting next to Carol.
Bob would lose 63 happiness units by sitting next to David.
Carol would lose 62 happiness units by sitting next to Alice.
Carol would gain 60 happiness units by sitting next to Bob.
Carol would gain 55 happiness units by sitting next to David.
David would gain 46 happiness units by sitting next to Alice.
David would lose 7 happiness units by sitting next to Bob.
David would gain 41 happiness units by sitting next to Carol.`), 330)
  t.end()
})

test('Day 13.B - Optimal seating with yourself', t => {
  const day13 = require('../solutions/13')
  t.notEqual(day13.b(`Alice would gain 54 happiness units by sitting next to Bob.
Alice would lose 79 happiness units by sitting next to Carol.
Alice would lose 2 happiness units by sitting next to David.
Bob would gain 83 happiness units by sitting next to Alice.
Bob would lose 7 happiness units by sitting next to Carol.
Bob would lose 63 happiness units by sitting next to David.
Carol would lose 62 happiness units by sitting next to Alice.
Carol would gain 60 happiness units by sitting next to Bob.
Carol would gain 55 happiness units by sitting next to David.
David would gain 46 happiness units by sitting next to Alice.
David would lose 7 happiness units by sitting next to Bob.
David would gain 41 happiness units by sitting next to Carol.`), 330)
  t.end()
})
