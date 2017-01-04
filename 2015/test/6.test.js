const test = require('tape')

test('Day 6.A - Grid of lights', t => {
  const day6 = require('../solutions/6')
  t.equal(day6.a('turn on 0,0 through 999,999'), 1000000)
  t.equal(day6.a('toggle 0,0 through 999,0'), 1000)
  t.equal(day6.a('turn off 499,499 through 500,500'), 0)
  t.end()
})

// test('Day 6.B - ', t => {
//   const day6 = require('../solutions/6')
//   t.equal(day6.b(), 'b')
//   t.end()
// })
