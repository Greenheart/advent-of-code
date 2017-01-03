#!/bin/bash

# all tests
if [[ $# -eq 0 ]]; then
  FILES="test/*"
# specific test(s)
else
  FILES=$1
fi

# run tests once
./node_modules/.bin/tape $FILES | ./node_modules/.bin/tap-diff

exit 0
