import React from 'react';

function propToString(prop) {
  if (React.isValidElement(prop)) {
    return generateJSX(prop);
  } else if (Array.isArray(prop)) {
    return '{[' + prop
      .map(item => propToString(item))
      .join(', ') + ']}';
  } else if (typeof prop === 'string') {
    return JSON.stringify(prop);
  }

  return '{' + JSON.stringify(prop) + '}';
}

function generateJSX(component) {
  if (!React.isValidElement(component)) {
    return component;
  }

  const type = component.type.name || component.type;

  let jsxProps = Object.keys(component.props)
    .filter(key => key !== 'children')
    .map(key => `${key}=${propToString(component.props[key])}`)
    .join(' ');

  if (jsxProps) {
    jsxProps = ' ' + jsxProps;
  }

  return React.Children.count(component.props.children) ?
    `<${type}${jsxProps}>${React.Children.map(component.props.children, generateJSX).join('')}</${type}>` :
    `<${type}${jsxProps} />`;
}

export default generateJSX;
