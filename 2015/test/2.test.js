const test = require('tape')

test('Day 2.A - How much wrapping paper?', t => {
  const day2 = require('../solutions/2')
  t.equal(day2.a('2x3x4'), 58)
  t.equal(day2.a('1x1x10'), 43)
  t.equal(day2.a('1x1x1'), 7)
  t.end()
})

test('Day 2.B - How much ribbon?', t => {
  const day2 = require('../solutions/2')
  t.equal(day2.b('2x3x4'), 34)
  t.equal(day2.b('1x1x10'), 14)
  t.end()
})
