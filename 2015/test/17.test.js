const test = require('tape')

const containers = `20
15
10
5
5`

test('Day 17.A - Eggnog Storage', t => {
  const day17 = require('../solutions/17')
  t.equal(day17.a(containers, 25), 4, 'should find number of possible combinations')
  t.end()
})

test('Day 17.B - Save your containers!', t => {
  const day17 = require('../solutions/17')
  t.equal(day17.b(containers, 25), 3, 'count combinations, but use as few containers as possible')
  t.end()
})
