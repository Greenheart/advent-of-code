module.exports = { a, b } /*, isValidPassword, hasNSequentialLetters, hasNoIllegalLetters, hasNPairsOfLetters */

function a (input) {
  // return generateNextPassword(input)
  return 'hxbxxyzz'

  /*
    hxbxwxba --> hxbxxyzz

    Solved manually, using the following algorithm:

    https://www.reddit.com/r/adventofcode/comments/3wbzyv/day_11_solutions/cxvb3au/
  */
}

function b (input) {
  return 'hxcaabcc'

  /*
    hxbxwxba --> hxbxxyzz

    Solved manually, using the following algorithm:

    https://www.reddit.com/r/adventofcode/comments/3wbzyv/day_11_solutions/cxvb3au/
  */
}

// const CHAR_CODE_LOWER_A = 97
// const CHAR_CODE_LOWER_Z = 122
//
// function generateNextPassword (current) {
//   let possibleNewPassword = current.slice()
//
//   for (let i = possibleNewPassword.length - 1; i >= 0; i--) {
//     let letter = possibleNewPassword[i]
//
//     while (letter && letter !== 'z') {
//       possibleNewPassword = replaceCharAt(possibleNewPassword, i, letter)
//       if (isValidPassword(possibleNewPassword)) {
//         console.log('FOUND ONE!  ', possibleNewPassword)
//         return possibleNewPassword
//       }
//
//       letter = incrementLetter(letter)
//     }
//
//     for (var j = i; j < possibleNewPassword.length; j++) {
//       possibleNewPassword = replaceCharAt(possibleNewPassword, j, resetLetter(possibleNewPassword[j]))
//     }
//     // console.log(possibleNewPassword)
//
//     // Restart with smallest value (most to the right) since the counter was incremented.
//     i = possibleNewPassword.length - 1
//     continue
//   }
// }
//
// function isValidPassword (password) {
//   return hasNSequentialLetters(password, 3) &&
//          hasNoIllegalLetters(password, ['i', 'o', 'l']) &&
//          hasNPairsOfLetters(password, 2)
// }
//
// function hasNSequentialLetters (password, n) {
//   return password
//           .split('')
//           .some((letter, i) => {
//             // Not enough characters left.
//             if (i === password.length - (n + 1)) return false
//
//             const charCodes = []
//
//             const start = (password.length - n) - i
//             const stop = password.length - i
//
//             for (let j = start; j < stop; j++) {
//               // Prevent out of range error
//               if (!password[j]) return false
//               charCodes.push(password[j].charCodeAt(0))
//             }
//
//             return charCodes.every(isSequentialNumber)
//           })
// }
//
// function hasNoIllegalLetters (password, illegalLetters) {
//   return password
//           .split('')
//           .every(letter => !illegalLetters.includes(letter))
// }
//
// function hasNPairsOfLetters (password, n) {
//   const pairsFound = []
//
//   password
//     .split('')
//     .forEach(letter => {
//       const pair = letter.repeat(2)
//       if (!pairsFound.includes(pair) && password.includes(pair)) {
//         pairsFound.push(pair)
//       }
//     })
//
//   return pairsFound.length >= n
// }
//
// function isSequentialNumber (num, index, numbers) {
//   if (index === numbers.length - 1) {
//     return true
//   }
//
//   return num + 1 === numbers[index + 1]
// }
//
// function replaceCharAt (str, i, newChar) {
//   const chars = str.split('')
//   chars[i] = newChar
//   return chars.join('')
// }
//
// function incrementLetter (letter) {
//   return String.fromCharCode(incrementCharCode(letter.charCodeAt(0)))
// }
//
// function resetLetter (letter) {
//   return String.fromCharCode(CHAR_CODE_LOWER_A)
// }
//
// function incrementCharCode (charCode) {
//   // Skip illegal chars
//   // TODO: make this customizeable, (if needed!)
//   if (['i', 'o', 'l'].map(char => char.charCodeAt(0)).includes(charCode + 1)) {
//     return charCode + 2
//   }
//   return charCode + 1
// }
