const test = require('tape')

test('Day 9.A - Route choices', t => {
  const day9 = require('../solutions/9')
  t.equal(day9.a(`London to Dublin = 464
London to Belfast = 518
Dublin to Belfast = 141`), 605)
  t.end()
})

test('Day 9.B - Route choices', t => {
  const day9 = require('../solutions/9')
  t.equal(day9.b(`London to Dublin = 464
London to Belfast = 518
Dublin to Belfast = 141`), 982)
  t.end()
})
