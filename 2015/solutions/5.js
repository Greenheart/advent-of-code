module.exports = { a, b, isNiceString, isNewNiceString }

function isNiceString (string, vowelsRequired, forbiddenSubstrings, vowels) {
  return hasEnoughVowels(string, vowelsRequired, vowels) &&
         hasDoubleLetters(string) &&
         hasNoForbiddenSubstring(string, forbiddenSubstrings)
}

function hasNoForbiddenSubstring (string, forbiddenSubstrings) {
  return forbiddenSubstrings
          .every(subString => string.includes(subString) === false)
}

function hasDoubleLetters (string) {
  return string
          .split('')
          .reduce(keepUniqueChars, [])
          .some(char => string.includes(char.repeat(2)))
}

function keepUniqueChars (uniqueChars, char) {
  if (!uniqueChars.includes(char)) {
    uniqueChars.push(char)
  }

  return uniqueChars
}

function hasEnoughVowels (string, required, vowels) {
  const count = string
                  .split('')
                  .reduce((count, char) => {
                    return charIsVowel(char, vowels)
                            ? count + 1
                            : count
                  }, 0)
  return count >= required
}

function charIsVowel (char, vowels) {
  return vowels.includes(char)
}

function a (input) {
  const vowels = 'aeiou'.split('')
  const vowelsRequired = 3
  const forbiddenSubstrings = ['ab', 'cd', 'pq', 'xy']
  const args = [vowelsRequired, forbiddenSubstrings, vowels]

  return input
          .split('\n')
          .filter(string => {
            return isNiceString(string, ...args)
          })
          .length
}

function b (input) {
  return input
          .split('\n')
          .filter(isNewNiceString)
          .length
}

function isNewNiceString (string) {
  return hasPairAppearingTwice(string) &&
         hasLetterSurroundingChar(string)
}

function hasLetterSurroundingChar (string) {
  return string
          .split('')
          .reduce(keepUniqueChars, [])
          .some(char => string.match(new RegExp(`${char}\\w${char}`, 'g')))
}

function hasPairAppearingTwice (string) {
  return getCharPairs(string)
          .filter(pair => string.split(pair).length - 1 === 2)
          .length > 0
}

function getCharPairs (string) {
  return string
          .split('')
          .reduce((pairs, char, index) => {
            if (index !== string.length - 1) {
              pairs.push(string.substr(index, 2))
            }

            return pairs
          }, [])
}
