module.exports = { a, b }

function a (input, outputWire = '*', wires = {}) {
  const instructionRegEx = /([a-z0-9]*)\b\s?([A-Z]+)?\s?(\S+)\s->\s(\S+)/
  const isDigitRegEx = /\d+/

  const OPERATIONS = {
    AND: (a, b) => a & b,
    OR: (a, b) => a | b,
    LSHIFT: (a, b) => a << b,
    RSHIFT: (a, b) => a >> b,
    NOT: (a, b) => b ^ 65535,
    ASSIGN: (a, b) => b
  }

  input = input.split('\n')

  function isReadyToBeComputed (wireInput) {
    return !wireInput || wires.hasOwnProperty(wireInput) || isDigitRegEx.test(wireInput)
  }

  // Get cached signal, or evaluate the signal value.
  function getSignal (wireInput) {
    return wires[wireInput] || parseInt(wireInput, 10)
  }

  while (input.length) {
    const [originalInstruction, a, operator, b, targetWire] = input
                                                                .shift()
                                                                .match(instructionRegEx)

    if ([a, b].every(isReadyToBeComputed)) {
      // Only compute signals yet not cached.
      if (wires[targetWire] === undefined) {
        const operation = OPERATIONS[operator || 'ASSIGN']
        const args = [a, b].map(getSignal)
        wires[targetWire] = operation(...args)
      }
    } else {
      input.push(originalInstruction)
    }
  }

  if (outputWire === '*') {
    return wires
  }

  return wires[outputWire]
}

function b (input, outputWire = '*', wires = {}) {
  // Simulate the circuit where wires.b is overridden by wires.a
  // This is achieved by passing an initial state for the wires to the outer call of a().
  return a(input, outputWire, {
    b: a(input, 'a')
  })
}
