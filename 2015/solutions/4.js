module.exports = { a, b }

const md5 = require('md5')

function getNumber (key, pattern) {
  let i = -1
  let hash

  do {
    ++i
    hash = md5(key + i)
  } while (!hash.startsWith(pattern))

  return i
}

function a (key) {
  return getNumber(key, '0'.repeat(5))
}

function b (key) {
  return getNumber(key, '0'.repeat(6))
}
