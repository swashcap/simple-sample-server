#!/bin/bash
set -eo pipefail

# Remove all built files and caches
rm -rf .awcache dist &
find src -type f \( -name '*.js' -o -name '*.map' -o -name 'styles.build.css' \) \
  -exec rm {} \+

wait
