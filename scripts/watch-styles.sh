#!/bin/bash
set -eo pipefail

./scripts/build-styles.sh

# New stylesheets or changes to the build script generate new styles
# https://github.com/kimmobrunfeldt/chokidar-cli#default-behavior
node_modules/.bin/chokidar 'src/client/**/*.css' scripts/build-styles.sh \
  -c 'if [ {event} = "add" ] || [ {event} = "unlink" ] || [ "$(basename {path})" = "build-styles.sh" ]; then ./scripts/build-styles.sh; fi;'