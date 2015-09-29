#!/usr/bin/env bash
# HOW TO USE
# Save code to file
# Run as "SCRIPT_FILE_NAME SASS_DIRECTORY"
# e.g "./find_unused_variables.sh ./sass"

VAR_NAME_CHARS='A-Za-z0-9_-'

OUTPUT=$(find "$1" -type f -name "*.scss" -exec grep -o "\$[$VAR_NAME_CHARS]*" {} ';' | sort | uniq -u)
if [ -z "$OUTPUT" ]
then
    exit 0
else
    echo 'Unused variables:'
    echo $OUTPUT
    exit 1
fi
