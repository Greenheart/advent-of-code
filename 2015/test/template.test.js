const test = require('tape')
// Replace all N with day
test('Day N.A - ', t => {
  const dayN = require('../solutions/N')
  t.pass()
  t.equal(dayN.a(), 'a')
  t.end()
})

test('Day N.B - ', t => {
  t.pass()
  const dayN = require('../solutions/N')
  t.equal(dayN.b(), 'b')
  t.end()
})
