const test = require('tape')

test('Day 14.A - Reindeer Racing #1', t => {
  const day14 = require('../solutions/14')

  const reindeer = `Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.
  Dancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds.`
  t.equal(day14.a(reindeer, 1000), 1120)
  t.end()
})

test('Day 14.B - Reindeer Racing #2', t => {
  const day14 = require('../solutions/14')

  const reindeer = `Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.
  Dancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds.`
  t.equal(day14.b(reindeer, 1000), 689)
  t.end()
})
