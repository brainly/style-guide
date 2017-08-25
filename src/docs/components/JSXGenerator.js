import React from 'react';

function propToString(prop, inJS = false) {
  let result = '';
  let wrapInBraces = !inJS;

  if (React.isValidElement(prop)) {
    result = generateJSX(prop);
  } else if (Array.isArray(prop)) {
    result = '[' + prop
      .map(item => propToString(item, true))
      .join(', ') + ']';
  } else if (typeof prop === 'string') {
    result = JSON.stringify(prop);
    wrapInBraces = false;
  } else {
    result = JSON.stringify(prop);
  }

  return wrapInBraces ? '{' + result + '}' : result;
}

function generateJSX(component) {
  if (!React.isValidElement(component)) {
    return component;
  }

  const type = component.type.name || component.type;
  const propValues = component.props;
  let jsxProps = Object.keys(propValues)
    .filter(key => key !== 'children')
    .filter(key => propValues[key] !== undefined)
    .map(key => {
      if (propValues[key] === true) {
        return key;
      }

      return `${key}=${propToString(component.props[key])}`;
    })
    .join(' ');

  if (jsxProps) {
    jsxProps = ' ' + jsxProps;
  }

  return React.Children.count(component.props.children) ?
    `<${type}${jsxProps}>${React.Children.map(component.props.children, generateJSX).join('')}</${type}>` :
    `<${type}${jsxProps} />`;
}

export default generateJSX;
