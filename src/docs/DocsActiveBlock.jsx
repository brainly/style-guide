import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function isComponent(value) {
  return value.$$typeof;
}

function propToString(prop) {
  if(isComponent((prop))) {
    return generateJSX(prop);
  } else if(Array.isArray(prop)) {
    return '[' + prop
      .map(item => propToString(item))
      .join(', ') + ']';
  } else {
    return JSON.stringify(prop);
  }
}

function generateJSX(component) {
  if(!isComponent(component)) {
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

  if(jsxProps) {
    jsxProps = ' ' + jsxProps;
  }

  return (children.length > 0) ?
    `<${type}${jsxProps}>${children.map(generateJSX).join('')}</${type}>` :
    `<${type}${jsxProps} />`;
}

const ContentBlock = ({children, toBottom, centered}) => {
  const contentClass = classnames('docs-block__content', {
    'docs-block__content--to-bottom': toBottom,
    'docs-block__content--centered': centered
  });

  return <div className={contentClass}>
    {children}
  </div>;
};

ContentBlock.propTypes = {
  children: PropTypes.node,
  centered: PropTypes.bool,
  toBottom: PropTypes.bool
};

const ComponentSettings = ({settings, values, onChange}) => {
  function inputChanged(values, e) {
    const target = e.target;
    const key = e.target.dataset.key;
    const type = e.target.dataset.valueType;
    let value = null;

    if (type === 'boolean') {
      value = Boolean(target.checked);
    } else if (type === 'number') {
      value = Number(target.value);
    } else if (type === 'object') {
      value = JSON.parse(target.value);
    } else if (type === 'array') {
      value = values[target.value];
    } else if (type === 'string') {
      value = target.value;
    }

    onChange(key, value);
  }

  const content = Object.keys(settings).map(key => {
    const allowedValues = settings[key];

    function stringifyIfNeeded(item) {
      return typeof item === 'string' ? item : JSON.stringify(item);
    }

    if (Array.isArray(allowedValues)) {
      const selectedIdx = allowedValues.indexOf(values[key]);

      return <label key={key}>{key}:
        <select
          data-key={key}
          data-value-type="array"
          onChange={inputChanged.bind(null, allowedValues)}
          value={selectedIdx}
        >
          {allowedValues.map((item, index) =>
            <option key={stringifyIfNeeded(item)} value={index}>{stringifyIfNeeded(item)}</option>)}
        </select>
      </label>
    }

    let type;
    let inputType;
    let inputValue = values[key];
    let checked = Boolean(values[key]);

    if (allowedValues === Boolean) {
      type = 'boolean';
      inputType = 'checkbox';
    } else if (allowedValues === Number) {
      type = 'number';
      inputType = 'number';
    } else if (allowedValues === Object) {
      type = 'object';
      inputType = 'text';
    } else if (allowedValues === String) {
      type = 'string';
      inputType = 'text';
    } else {
      throw new Error('Unsupported value type.');
    }

    return <label key={key}>{key}:
      <input type={inputType}
             data-key={key}
             data-value-type={type}
             checked={checked}
             value={inputValue}
             onChange={inputChanged.bind(null, allowedValues)}/>
    </label>
  });

  return <fieldset className="docs-block__settings">{content}</fieldset>;
};

ComponentSettings.propTypes = {
  settings: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};


class DocsActiveBlock extends Component {

  constructor(props) {
    super(props);

    this.$child = null;
    this.state = {};

    if(this.props.children) {
      const props = this.props.children.props;

      this.state = Object.keys(props)
        .filter(key => props.hasOwnProperty(key))
        .reduce((result, key) => {
          result[key] = props[key];
          return result;
        }, {});
    }
  }

  componentDidUpdate() {
    const jsx = generateJSX(this.component);
    const html = ReactDOM.findDOMNode(this).querySelector('.docs-block__content').innerHTML;

    console.log(jsx);

    // cleaner.clean(html, {'remove-comments': true}, cleanHTML => console.log(cleanHTML));
  }

  setProps(key, value) {
    this.setState({
      [key]: value
    })
  }

  render() {
    this.component = React.cloneElement(this.props.children, this.state);

    return <section className="docs-block">
      <ContentBlock centered>{this.component}</ContentBlock>
      <ComponentSettings onChange={this.setProps.bind(this)} settings={this.props.settings} values={this.state}/>
    </section>
    ;
  }
}

DocsActiveBlock.propTypes = {
  children: PropTypes.node,
};

export default DocsActiveBlock;
