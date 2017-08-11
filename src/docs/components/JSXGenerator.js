import React from 'react';
import ReactDOMServer from 'react-dom/server';

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

function generateJSX(component, settings = null) {
  if (!React.isValidElement(component)) {
    return component;
  }

  const type = component.type.name || component.type;

  let unchangedProps, propsWithDefaults = [];

  if (Array.isArray(settings)) {

    unchangedProps = Object.keys(component.props)
      .filter(key => {
        const propSettings = settings.find(setting => setting.name === key);

        if (!propSettings || propSettings.required) {
          return true;
        }

        return false;
      });

    propsWithDefaults = Object.keys(component.props)
      .filter(key => unchangedProps.indexOf(key) === -1);
  }

  let jsxProps = Object.keys(component.props)
    .filter(key => key !== 'children')
    .filter(key => component.props[key] !== undefined)
    .filter(key => {
      if (settings && propsWithDefaults.indexOf(key) > -1) {
        const componentWithoutProp = React.cloneElement(component, {[`${key}`]: undefined});
        const codeWithProp = ReactDOMServer.renderToStaticMarkup(component);
        const codeWithoutProp = ReactDOMServer.renderToStaticMarkup(componentWithoutProp);

        return codeWithProp !== codeWithoutProp;
      }
      return true;
    })
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
