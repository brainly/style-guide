#!/usr/bin/env node

'use strict';

const glob = require('glob');
const path = require('path');
const fs = require('fs-extra');
const jsc = require('jscodeshift');
const flowParser = require('jscodeshift/parser/flow');

const ROOT_DIR = path.resolve(__dirname, '../');
const SOURCE_DIR = path.join(ROOT_DIR, '/');

// Search for color usages in a component:
//   new RegExp('<Headline([^>]|\n)*(color=")([^>]|\n)*[>]'),

const files = glob.sync('/**/*.{jsx,tsx}', {
  ignore: [
    '*/node_modules/*',
    'node_modules/*',
    '**/node_modules/*',
    './script',
  ],
  root: SOURCE_DIR,
  recursive: true,
});

// Icons color maps:
const iconsColorsMap = {
  dark: 'icon-black',
  light: 'icon-white',
  blue: 'icon-blue-50',
  'blue-dark': 'icon-blue-50',
  lavender: 'icon-indigo-50',
  mint: 'icon-green-50',
  mustard: 'icon-yellow-50',
  peach: 'icon-red-50',
  'peach-dark': 'icon-red-50',
  gray: 'icon-gray-70',
  'gray-secondary': 'icon-gray-50',
  'gray-light': 'icon-gray-40',
};

// Text color maps:
const textColorsMap = {
  dark: 'text-black',
  black: 'text-black',
  light: 'text-white',
  white: 'text-white',
  blue: 'text-blue-60',
  'blue-dark': 'text-blue-60',
  'blue-primary': 'text-blue-60',
  'blue-secondary': 'text-blue-40',
  lavender: 'text-indigo-60',
  'lavender-dark': 'text-indigo-60',
  'lavender-primary': 'text-indigo-60',
  'lavender-secondary': 'text-indigo-40',
  mint: 'text-green-60',
  'mint-dark': 'text-green-60',
  'mint-primary': 'text-green-60',
  'mint-secondary': 'text-green-40',
  mustard: 'text-yellow-60',
  'mustard-dark': 'text-yellow-60',
  'mustard-primary': 'text-yellow-60',
  'mustard-secondary': 'text-yellow-40',
  peach: 'text-red-60',
  'peach-dark': 'text-red-60',
  'peach-primary': 'text-red-60',
  'peach-secondary': 'text-red-40',
  gray: 'text-gray-70',
  'gray-secondary': 'text-gray-60',
  'gray-secondary-light': 'text-gray-40',
  'gray-light': 'text-gray-40',
};

// Link color maps:
const linkColorsMap = {
  dark: 'text-black',
  black: 'text-black',
  light: 'text-white',
  white: 'text-white',
  blue: 'text-blue-60',
  'blue-dark': 'text-blue-60',
  'blue-primary': 'text-blue-60',
  'blue-secondary': 'text-blue-40',
  lavender: 'text-indigo-60',
  'lavender-dark': 'text-indigo-60',
  'lavender-primary': 'text-indigo-60',
  'lavender-secondary': 'text-indigo-40',
  mint: 'text-green-60',
  'mint-dark': 'text-green-60',
  'mint-primary': 'text-green-60',
  'mint-secondary': 'text-green-40',
  mustard: 'text-yellow-60',
  'mustard-dark': 'text-yellow-60',
  'mustard-primary': 'text-yellow-60',
  'mustard-secondary': 'text-yellow-40',
  peach: 'text-red-60',
  'peach-dark': 'text-red-60',
  'peach-primary': 'text-red-60',
  'peach-secondary': 'text-red-40',
  gray: 'text-gray-70',
  'gray-secondary': 'text-gray-60',
  'gray-secondary-light': 'text-gray-50',
  'gray-light': 'text-gray-40',
};

const colorsMap = linkColorsMap;

const componentName = 'Link';

const unmatchedFiles = [];

files.forEach(sourceFile => {
  const flowCode = fs.readFileSync(sourceFile, 'utf-8');
  const ast = jsc(flowCode, {
    parser: flowParser(),
  });
    
  let wasFileFound = false;
  // Code transformations
  // Replace old color values from <componentName component
  ast
    .find(jsc.JSXOpeningElement)
    .filter(path => path.value.name.name === componentName)
    .forEach(path => {
      const color = path.value.attributes.find(
        attribute => attribute.name && attribute.name.name === 'color'
      );
      
      if (color && colorsMap[color.value.value]) {
        wasFileFound = true;
        color.value.value = colorsMap[color.value.value];
      } else {
        unmatchedFiles.push(sourceFile)
      }
    });
    
    if (wasFileFound)
      fs.outputFileSync(sourceFile, ast.toSource(), noop => noop);
});

console.log("unmatchedFiles:", unmatchedFiles);