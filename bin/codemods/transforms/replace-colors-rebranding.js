#!/usr/bin/env node

'use strict';

const chalk = require('chalk');
const flowParser = require('jscodeshift/parser/flow');

const iconsColorsMap = {
  adaptive: 'adaptive',
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

const linkColorsMap = {
  ...textColorsMap,
  'gray-secondary-light': 'text-gray-50',
};

const labelColorsMap = {
  mint: 'green',
  lavender: 'indigo',
  peach: 'red',
  mustard: 'yellow',
};

const bubbleColorsMap = {
  'navyblue-secondary': 'white',
  dark: 'gray-40',
  'gray-secondary-light': 'gray-20',
  blue: 'blue-40',
  'blue-secondary': 'blue-30',
  'blue-secondary-light': 'blue-20',
  lavender: 'indigo-40',
  mint: 'green-40',
  'mint-secondary': 'green-30',
  'mint-secondary-light': 'green-20',
  peach: 'red-40',
};

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

const cardHoleColorsMap = {
  blue: 'blue-40',
  'blue-secondary': 'blue-30',
  'blue-secondary-light': 'blue-20',
  lavender: 'indigo-40',
  'lavender-secondary': 'indigo-30',
  'lavender-secondary-light': 'indigo-20',
  mint: 'green-40',
  'mint-secondary': 'green-30',
  'mint-secondary-light': 'green-20',
  mustard: 'yellow-40',
  'mustard-secondary': 'yellow-30',
  'mustard-secondary-light': 'yellow-20',
  gray: 'gray-70',
  'gray-secondary': 'gray-50',
  'gray-secondary-light': 'gray-40',
  'gray-secondary-lightest': 'gray-20',
  'gray-secondary-ultra-light': 'gray-10',
};

const spinnerColorsMap = {
  black: 'black',
  white: 'white',
  'gray-900': 'gray-70',
  'gray-700': 'gray-50',
  'peach-700': 'red-40',
  'mustard-700': 'yellow-40',
  'blue-700': 'blue-40',
};

const counterColorsMap = {
  'peach-900': 'red-50',
  'blue-900': 'blue-50',
};

const overlayColorsMap = {
  dark: 'black',
  blue: 'blue',
};

const fileHandlerColorsMap = {
  'gray-secondary-light': 'gray-20',
  white: 'white',
};

const componentsColorsMap = {
  Icon: iconsColorsMap,
  MobileIcon: iconsColorsMap,
  SubjectIcon: iconsColorsMap,
  MathSymbol: iconsColorsMap,
  IconAsButton: iconsColorsMap,
  Text: textColorsMap,
  TextBit: textColorsMap,
  Link: linkColorsMap,
  Headline: textColorsMap,
  Bubble: bubbleColorsMap,
  Box: boxColorsMap,
  Label: labelColorsMap,
  CardHole: cardHoleColorsMap,
  Spinner: spinnerColorsMap,
  SpinnerContainer: spinnerColorsMap,
  Counter: counterColorsMap,
  Overlay: overlayColorsMap,
  FileHandler: fileHandlerColorsMap,
};

const createFileMessage = ({astNode, parentNodeName, filePath}) => {
  const columnNumber = astNode.value.loc.start.column;
  const lineNumber = astNode.value.loc.start.line;

  let logMessage = `${chalk.cyan(
    'unmatched: '
  )}${filePath}:${lineNumber}:${columnNumber}`;

  if (astNode.value.type === 'Literal')
    logMessage += chalk.magenta(
      ` <- unrecognized string literal in ${parentNodeName}`
    );
  else
    logMessage += chalk.yellow(` <- use of custom prop in ${parentNodeName}`);

  return logMessage;
};

// TIP: Search for color usages in a component which pass string literals:
//   new RegExp('<Headline([^>]|\n)*(color=")([^>]|\n)*[>]'),
// or params
//   new RegExp('<Headline([^>]|\n)*(color={)([^>]|\n)*[>]'),

module.exports = (file, api, options) => {
  const jsc = api.jscodeshift;
  let astTree;

  if (options.parser === 'flow') {
    astTree = jsc(file.source, {
      parser: flowParser(),
    });
  } else astTree = jsc(file.source);

  const componentsArr = options.components.split(',');

  // Code transformations
  // Replace old color values from <componentName components
  astTree
    // Search for JSX opening elements in a file
    .find(jsc.JSXOpeningElement)
    // Check if we should modify all components
    // or if JSX element is on the list of components that we want to modify
    .filter(
      path =>
        componentsArr.includes('all') ||
        componentsArr.includes(path.value.name.name)
    )
    .forEach(path => {
      const colorAttr = path.value.attributes.find(
        attribute => attribute.name && attribute.name.name === 'color'
      );

      // If there is no "color" attribute, there is nothing to change
      if (!colorAttr) return;

      const currentComponentName = path.value.name.name;
      const colorsMap = componentsColorsMap[currentComponentName];

      // Check if this color was already changed to correct one
      const isCorrectColor = Object.values(colorsMap).includes(
        colorAttr.value.value
      );

      if (isCorrectColor) return;

      // If this color needs to be changed - replace it
      if (colorsMap[colorAttr.value.value]) {
        colorAttr.value.value = colorsMap[colorAttr.value.value];
      } else {
        // If there was 'color' attribute found, but it doesn't match any of color maps it means there is a custom string literal or param used.
        // Print the info.
        console.log(
          createFileMessage({
            astNode: colorAttr,
            filePath: file.path,
            parentNodeName: currentComponentName,
          })
        );
      }
    });

  return astTree.toSource();
};
