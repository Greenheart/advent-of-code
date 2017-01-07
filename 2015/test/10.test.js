const test = require('tape')

test('Day 10.A - Look & Say', t => {
  const day10 = require('../solutions/10')

  t.comment('Single iterations')
  t.equal(day10.a('1'), 2)
  t.equal(day10.a('11'), 2)
  t.equal(day10.a('21'), 4)
  t.equal(day10.a('1211'), 6)
  t.equal(day10.a('111221'), 6)

  t.comment('Multiple iterations')
  t.equal(day10.a('1', 2), 2)
  t.equal(day10.a('1', 3), 4)
  t.equal(day10.a('1', 4), 6)
  t.equal(day10.a('1', 5), 6)
  t.end()
})

test('Day 10.B - Look & Say', t => {
  const day10 = require('../solutions/10')

  // B should make use of A's implementation internally.

  t.comment('Single iterations')
  t.equal(day10.b('1'), 2)
  t.equal(day10.b('11'), 2)
  t.equal(day10.b('21'), 4)
  t.equal(day10.b('1211'), 6)
  t.equal(day10.b('111221'), 6)

  t.comment('Multiple iterations')
  t.equal(day10.b('1', 2), 2)
  t.equal(day10.b('1', 3), 4)
  t.equal(day10.b('1', 4), 6)
  t.equal(day10.b('1', 5), 6)
  t.end()
})
