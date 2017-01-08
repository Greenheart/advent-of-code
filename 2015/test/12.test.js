const test = require('tape')

test('Day 12.A - ReduceR', t => {
  const day12 = require('../solutions/12')
  t.equal(day12.a('[1,2,3]'), 6)
  t.equal(day12.a('{"a":2,"b":4}'), 6)
  t.equal(day12.a('[[[3]]]'), 3)
  t.equal(day12.a('{"a":{"b":4},"c":-1}'), 3)
  t.equal(day12.a('{"a":[-1,1]}'), 0)
  t.equal(day12.a('[-1,{"a":1}]'), 0)
  t.equal(day12.a('[]'), 0)
  t.equal(day12.a('{}'), 0)
  t.end()
})

test('Day 12.B - Reduce ignore', t => {
  const day12 = require('../solutions/12')
  t.equal(day12.b('[1,2,3]', 'red'), 6)
  t.equal(day12.b('[1,{"c":"red","b":2},3]', 'red'), 4)
  t.equal(day12.b('{"d":"red","e":[1,2,3,4],"f":5}', 'red'), 0)
  t.equal(day12.b('[1,"red",5]', 'red'), 6)
  t.end()
})
