#!/usr/bin/env bash

# This is an scss-lint exec script for JetBrains-family IDEs
SCRIPT_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source ${SCRIPT_DIR}/run-scss-lint.sh $1 -f JSON
