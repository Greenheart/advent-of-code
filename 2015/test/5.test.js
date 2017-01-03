const test = require('tape')

test('Day 5.A - How many nice strings?', t => {
  const day5 = require('../solutions/5')

  const vowels = 'aeiou'.split('')
  const vowelsRequired = 3
  const forbiddenSubstrings = ['ab', 'cd', 'pq', 'xy']
  const args = [vowelsRequired, forbiddenSubstrings, vowels]

  t.equal(day5.isNiceString('ugknbfddgicrmopn', ...args), true)
  t.equal(day5.isNiceString('aaa', ...args), true)
  t.equal(day5.isNiceString('jchzalrnumimnmhp', ...args), false, 'should include double letter')
  t.equal(day5.isNiceString('haegwjzuvuyypxyu', ...args), false, 'should not include forbidden substring "xy"')
  t.equal(day5.isNiceString('dvszwmarrgswjxmb', ...args), false, 'should include > 1 vowel')
  t.end()
})

test('Day 5.B - (New spec): How many nice strings?', t => {
  const day5 = require('../solutions/5')
  t.equal(day5.isNewNiceString('qjhvhtzxzqqjkmpb'), true)
  t.equal(day5.isNewNiceString('xxyxx'), true)
  t.equal(day5.isNewNiceString('uurcxstgmygtbstg'), false)
  t.equal(day5.isNewNiceString('ieodomkazucvgmuy'), false)
  t.end()
})
