const test = require('tape')

const ingredients = `Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8
Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3`

const expected = [
  {
    capacity: -1,
    durability: -2,
    flavor: 6,
    texture: 3,
    calories: 8
  },
  {
    capacity: 2,
    durability: 3,
    flavor: -2,
    texture: -1,
    calories: 3
  }
]

test('Day 15.A - Science for hungry people', t => {
  const day15 = require('../solutions/15')

  t.comment('parseIngredients')
  t.deepEqual(day15.parseIngredients(ingredients), expected)

  t.comment('Optimize Recipe')
  t.equal(day15.a(ingredients), 62842880)
  t.end()
})

test('Day 15.B - Optimize calories', t => {
  const day15 = require('../solutions/15')
  t.equal(day15.b(ingredients, 500), 57600000)
  t.end()
})
