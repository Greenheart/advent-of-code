const test = require('tape')
const fs = require('fs')
const path = require('path')

const rawAunts = `Sue 1: children: 1, cars: 8, vizslas: 7
Sue 2: akitas: 10, perfumes: 10, children: 5`

const allRawAunts = fs.readFileSync(path.join(__dirname, '/../input/16'), 'utf-8')
const expectedAunts = [
  { id: 1, clues: { children: 1, cars: 8, vizslas: 7 } },
  { id: 2, clues: { akitas: 10, perfumes: 10, children: 5 } }
]

test('Day 16.A - Aunt Sue', t => {
  const day16 = require('../solutions/16')

  t.comment('parseAunts()')
  const actualAunts = day16.parseAunts(rawAunts)
  t.deepEquals(actualAunts, expectedAunts)

  t.comment('Aunt.matches()')
  const aunt = actualAunts[0]
  t.equal(aunt.matches({ children: 1, cars: 8, vizslas: 7 }), true)
  t.equal(aunt.matches({ akitas: 10, perfumes: 10, children: 5 }), false)

  t.end()
})

test('Day 16.B - The REAL Aunt Sue', t => {
  const day16 = require('../solutions/16')

  t.comment('Aunt.matchesRanges()')
  const aunts = day16.parseAunts(allRawAunts)
  const aunt1 = aunts[0]
  const aunt323 = aunts[322]

  const realClues = {
    children: 3,
    cats: 7,
    samoyeds: 2,
    pomeranians: 3,
    akitas: 0,
    vizslas: 0,
    goldfish: 5,
    trees: 3,
    cars: 2,
    perfumes: 1
  }
  t.equal(aunt1.matchesRanges(realClues), false)
  t.equal(aunt323.matchesRanges(realClues), true)

  t.end()
})
