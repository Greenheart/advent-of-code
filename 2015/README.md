## Testing setup
- Assertion library: `tape`
- Test runner: `npm scripts` + `tape-watch`
- Output formatting: `tap-diff`

## Usage
- `node run.js day` - Run the solution for a given day against it's input.
- `npm test [files]` - Run specific test(s) once. **Default: `test/*`**
- `npm run tdd [files]` -  Watch files using `tape-watch` and run specific test(s) continually. **Default: `test/*`**

`[files]` is a string pattern matching files to be tested. E.g. `test/*.test.js`
