#!/bin/bash

# all tests
if [[ $# -eq 0 ]]; then
  FILES="test/*"
# specific test(s)
else
  FILES=$1
fi

# watch for changes and continually run tests
./node_modules/.bin/tape-watch $FILES -p tap-diff

exit 0
