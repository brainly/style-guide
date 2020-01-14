import React from 'react';

function propToString(prop) {
  var inJS = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var result = '';
  var wrapInBraces = !inJS;

  if (React.isValidElement(prop)) {
    result = generateJSX(prop);
  } else if (Array.isArray(prop)) {
    result = "[".concat(prop.map(function (item) {
      return propToString(item, true);
    }).join(', '), "]");
  } else if (typeof prop === 'string') {
    result = JSON.stringify(prop);
    wrapInBraces = false;
  } else {
    result = JSON.stringify(prop);
  }

  return wrapInBraces ? "{".concat(result, "}") : result;
}

function generateJSX(component) {
  if (!React.isValidElement(component)) {
    return component;
  }

  var type = component.type.name || component.type;
  var jsxProps = Object.keys(component.props).filter(function (key) {
    return key !== 'children';
  }).filter(function (key) {
    return component.props[key] !== undefined;
  }).map(function (key) {
    if (component.props[key] === true) {
      return key;
    }

    return "".concat(key, "=").concat(propToString(component.props[key]));
  }).join(' ');

  if (jsxProps) {
    jsxProps = " ".concat(jsxProps);
  }

  return React.Children.count(component.props.children) ? "<".concat(type).concat(jsxProps, ">").concat(React.Children.map(component.props.children, generateJSX).join(''), "</").concat(type, ">") : "<".concat(type).concat(jsxProps, " />");
}

export default generateJSX;