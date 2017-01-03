const test = require('tape')

test('Day 1.A - What floor?', t => {
  const day1 = require('../solutions/1')
  t.equal(day1.a('(())'), 0)
  t.equal(day1.a('()()'), 0)
  t.equal(day1.a('((('), 3)
  t.equal(day1.a('(()(()('), 3)
  t.equal(day1.a('))((((('), 3)
  t.equal(day1.a('())'), -1)
  t.equal(day1.a('))('), -1)
  t.equal(day1.a(')))'), -3)
  t.equal(day1.a(')())())'), -3)
  t.end()
})

test('Day 1.B - When does he enter the basement?', t => {
  const day1 = require('../solutions/1')
  t.equal(day1.b(')'), 1)
  t.equal(day1.b('()())'), 5)
  t.end()
})
