#!/usr/bin/env node

const constants = require('./constants');
const YAML = require('yaml');

const deprecated = require(constants.DEPRECATED_JSON_PATH);
const deprecatedYaml = YAML.stringify(deprecated);
const fs = require('fs');

fs.writeFileSync(constants.DEPRECATED_YAML_PATH, deprecatedYaml);
