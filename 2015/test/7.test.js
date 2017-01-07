const test = require('tape')

test('Day 7.A - Some Assembly Required', t => {
  const day7 = require('../solutions/7')

  let input = '123 -> x'
  t.deepEqual(day7.a(input, 'x'), 123)

  input += '\n456 -> y'
  t.deepEqual(day7.a(input, 'y'), 456)

  input += '\nx AND y -> d'
  t.deepEqual(day7.a(input, 'd'), 72)

  input += '\nx OR y -> e'
  t.deepEqual(day7.a(input, 'e'), 507)

  input += '\nx LSHIFT 2 -> f'
  t.deepEqual(day7.a(input, 'f'), 492)

  input += '\ny RSHIFT 2 -> g'
  t.deepEqual(day7.a(input, 'g'), 114)

  input += '\nNOT x -> h'
  t.deepEqual(day7.a(input, 'h'), 65412)

  input += '\nNOT y -> i'
  t.deepEqual(day7.a(input, 'i'), 65079)
  t.end()
})

test('Day 7.B - Assembly override', t => {
  t.comment('Check tests above instead!')
  t.end()
})
