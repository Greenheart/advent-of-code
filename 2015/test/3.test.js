const test = require('tape')
test('Day 3.A - How many houses?', t => {
  const day3 = require('../solutions/3')
  t.equal(day3.a('>'), 2)
  t.equal(day3.a('^>v<'), 4)
  t.equal(day3.a('^v^v^v^v^v'), 2)
  t.end()
})

test('Day 3.B - Robo-Santa', t => {
  const day3 = require('../solutions/3')
  t.equal(day3.b('^v'), 3)
  t.equal(day3.b('^>v<'), 3)
  t.equal(day3.b('^v^v^v^v^v'), 11)
  t.end()
})
