function isComponent(value) {
  return value.$$typeof;
}

function propToString(prop) {
  if (isComponent((prop))) {
    return generateJSX(prop);
  } else if (Array.isArray(prop)) {
    return '{[' + prop
        .map(item => propToString(item))
        .join(', ') + ']}';
  } else if (typeof prop === "string") {
    return JSON.stringify(prop);
  }

  return '{' + JSON.stringify(prop) + '}';
}

function generateJSX(component) {
  if (!isComponent(component)) {
    return component;
  }

  const type = component.type.name || component.type;
  let children = component.props.children || [];

  if (!Array.isArray(children)) {
    children = [children];
  }

  let jsxProps = Object.keys(component.props)
    .filter(key => key !== 'children')
    .map(key => `${key}=${propToString(component.props[key])}`)
    .join(' ');

  if (jsxProps) {
    jsxProps = ' ' + jsxProps;
  }

  return (children.length > 0) ?
    `<${type}${jsxProps}>${children.map(generateJSX).join('')}</${type}>` :
    `<${type}${jsxProps} />`;
}

export default generateJSX;
