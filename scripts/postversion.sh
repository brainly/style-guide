#!/usr/bin/env bash
old_version=$(cat /tmp/old_styleguide_version)
rm /tmp/old_styleguide_version

# escaping dots to convert regex-compatible strings
old_version_regex=${old_version//\./\\\.}
new_version_regex=${npm_package_version//\./\\\.}

# replasing versions in source files to get proper documentation links
find . -type f -name '*.jsx' -exec sed -i "s/$old_version_regex/$new_version_regex/g" {} +
git push && git push --tags
