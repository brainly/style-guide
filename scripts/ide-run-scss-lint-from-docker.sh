#!/usr/bin/env bash
SCRIPT_DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source ${SCRIPT_DIR}/run-scss-lint.sh $1 -f JSON
