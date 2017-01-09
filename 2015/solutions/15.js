module.exports = { a, b, parseIngredients }

function a (input) {
  return findOptimalRecipe(input)
}

function b (input, calories) {
  // Use a variable scoped to the module to avoid having to pass
  // the value through all the module's functions.
  module.calories = calories
  return findOptimalRecipe(input)
}

function findOptimalRecipe (input) {
  const ingredients = parseIngredients(input)

  return findMaximum(ingredients, 100, new Ingredient())
}

const ingredientRegEx = /(-?\d+)/g

function parseIngredients (input) {
  return clean(input)
          .map(rawIngredient => {
            const params = rawIngredient
                              .match(ingredientRegEx)
                              .map(Number)

            return new Ingredient(...params)
          })
}

function findMaximum (spareIngredients, spoons, ingredientsAddedSoFar) {
  const firstIngredient = spareIngredients[0]

  if (spareIngredients.length === 1) {
    const totalIngredient = ingredientsAddedSoFar.addTo(firstIngredient.multiplyBy(spoons))

    if (module.calories) {
      return totalIngredient.calories === module.calories ? totalIngredient.score : 0
    }

    return totalIngredient.score
  }

  let best = 0

  for (let i = 0; i < spoons + 1; i++) {
    const tmp = findMaximum(
                  spareIngredients.slice(1),
                  spoons - i,
                  ingredientsAddedSoFar.addTo(firstIngredient.multiplyBy(i))
                )

    best = Math.max(tmp, best)
  }

  return best
}

class Ingredient {
  constructor (capacity = 0, durability = 0, flavor = 0, texture = 0, calories = 0) {
    this.capacity = capacity
    this.durability = durability
    this.flavor = flavor
    this.texture = texture
    this.calories = calories
  }

  addTo (other) {
    return new Ingredient(
      this.capacity + other.capacity,
      this.durability + other.durability,
      this.flavor + other.flavor,
      this.texture + other.texture,
      this.calories + other.calories
    )
  }

  multiplyBy (n) {
    return new Ingredient(
      this.capacity * n,
      this.durability * n,
      this.flavor * n,
      this.texture * n,
      this.calories * n
    )
  }

  get score () {
    if (this.capacity <= 0 || this.durability <= 0 || this.flavor <= 0 || this.texture <= 0) {
      return 0
    }
    return this.capacity * this.durability * this.flavor * this.texture
  }
}

function clean (input) {
  return input.trim().split('\n')
}
