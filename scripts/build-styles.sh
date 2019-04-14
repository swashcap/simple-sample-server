#!/bin/bash
set -eo pipefail

OUTPUT="src/client/styles.build.css"

cat << EOF > "$OUTPUT"
/**
 * Generated styles.
 *
 * See scripts/build-styles.sh
 */
@import "../../node_modules/tachyons/css/tachyons.min.css";
$(find src/client -type f \( -name '*.css' -not -name 'styles.build.css' \) | sed -E 's#src/client/(.*)#@import "./\1";#')
EOF

echo "Build styles: $OUTPUT"