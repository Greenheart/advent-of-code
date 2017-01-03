const test = require('tape')
// TODO: fix names
test('Day 4.A - AdventCoin Lvl 5', t => {
  const day4 = require('../solutions/4')
  t.equal(day4.a('abcdef'), 609043)
  t.equal(day4.a('pqrstuv'), 1048970)
  t.end()
})

test('Day 4.B - AdventCoin Lvl 6', t => {
  // const day4 = require('../solutions/4')
  t.comment('No tests here... :P')
  t.end()
})
