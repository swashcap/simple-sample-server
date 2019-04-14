#!/bin/bash
set -eo pipefail

find src -type f \( -name '*.js' -o -name '*.map' -o -name 'styles.build.css' \) \
  -exec rm {} \+