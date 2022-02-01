#!/usr/bin/env node

'use strict';

const glob = require('glob');
const path = require('path');
const fs = require('fs-extra');
const jsc = require('jscodeshift');
const flowParser = require('jscodeshift/parser/flow');

const ROOT_DIR = path.resolve(__dirname, '../');
const SOURCE_DIR = path.join(ROOT_DIR, '/');

// TIP: Search for color usages in a component which pass string literals:
//   new RegExp('<Headline([^>]|\n)*(color=")([^>]|\n)*[>]'),
// or params
//   new RegExp('<Headline([^>]|\n)*(color={)([^>]|\n)*[>]'),

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

// Label color maps:
const labelColorsMap = {
  mint: 'green',
  lavender: 'indigo',
  peach: 'red',
  mustard: 'yellow',
};

// Box color maps:
const boxColorsMap = {
  dark: 'gray-40',
  light: 'white',
  blue: 'blue-40',
  lavender: 'indigo-40',
  'lavender-secondary-light': 'indigo-20',
  'lavender-20': 'indigo-20',
  'lavender-10': 'indigo-10',
  'lavender-secondary-ultra-light': 'indigo-10',
  mint: 'green-40',
  'mint-secondary': 'green-30',
  'mind-secondary-light': 'green-20',
  'mint-secondary-light': 'green-20',
  'mint-secondary-ultra-light': 'green-10',
  'blue-secondary': 'blue-30',
  'blue-secondary-light': 'blue-20',
  'gray-secondary-lightest': 'gray-20',
  'gray-secondary-ultra-light': 'gray-10',
  'mustard-primary': 'yellow-40',
  'mustard-secondary-light': 'yellow-20',
  peach: 'red-40',
  'peach-secondary': 'red-30',
  'peach-secondary-light': 'red-20',
  transparent: 'transparent',
};


// Bubble color maps:
const bubbleColorsMap = {
  'navyblue-secondary': 'white',
  'dark': 'gray-40',
  'gray-secondary-light': 'gray-20',
  'blue': 'blue-40',
  'blue-secondary': 'blue-30',
  'blue-secondary-light': 'blue-20',
  'lavender': 'indigo-40',
  'mint': 'green-40',
  'mint-secondary': 'green-30',
  'mint-secondary-light': 'green-20',
  'peach': 'red-40',
};

const colorsMap = boxColorsMap;
const componentName = 'Box';
const unmatchedFiles = [];

files.forEach(sourceFile => {
  const flowCode = fs.readFileSync(sourceFile, 'utf-8');
  const ast = jsc(flowCode, {
    parser: flowParser(),
  });
    
  // Code transformations
  // Replace old color values from <componentName component
  let wasFileFound = false;
  ast
    .find(jsc.JSXOpeningElement)
    .filter(path => path.value.name.name === componentName)
    .forEach(path => {
      const color = path.value.attributes.find(
        attribute => attribute.name && attribute.name.name === 'color'
      );

      if (color) {
        if (colorsMap[color.value.value]) {
          wasFileFound = true;
          color.value.value = colorsMap[color.value.value];
        } else {
          // If there was 'color' attribute found, but it doesn't match any of strings it means there is a param or some logic
          unmatchedFiles.push(sourceFile)
        }
      }
    });
    
    if (wasFileFound)
      fs.outputFileSync(sourceFile, ast.toSource(), noop => noop);
});

console.log("unmatchedFiles:", unmatchedFiles);
