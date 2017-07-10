import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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

const ComponentSettings = ({settings, onChange}) => {
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
    const value = settings[key];

    function stringifyIfNeeded(item) {
      return typeof item === 'string' ? item : JSON.stringify(item);
    }

    if (Array.isArray(value)) {
      return <label key={key}>{key}:
        <select data-key={key} data-value-type="array" onChange={inputChanged.bind(null, value)}>
          {value.map((item, index) => <option key={stringifyIfNeeded(item)}
                                              value={index}>{stringifyIfNeeded(item)}</option>)}
        </select>
      </label>
    }

    let type;
    let inputType;

    if (value === Boolean) {
      type = 'boolean';
      inputType = 'checkbox';
    } else if (value === Number) {
      type = 'number';
      inputType = 'number';
    } else if (value === Object) {
      type = 'object';
      inputType = 'text';
    } else if (value === String) {
      type = 'string';
      inputType = 'text';
    } else {
      throw new Error('Unsupported value type.');
    }

    return <label key={key}>{key}: <input type={inputType} data-key={key} data-value-type={type}
                                          onChange={inputChanged.bind(null, value)}/></label>
  });

  return <fieldset className="docs-block__settings">{content}</fieldset>;
};

ComponentSettings.propTypes = {
  settings: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};


class DocsActiveBlock extends Component {

  setProps(key, value) {
    this.setState({
      [key]: value
    })
  }

  render() {
    const childrenUpdated = this.props.children.map(item => React.cloneElement(item, this.state));

    return <section className="docs-block">
      <ContentBlock>{childrenUpdated}</ContentBlock>
      <ComponentSettings onChange={this.setProps.bind(this)} settings={this.props.settings}/>
    </section>
    ;
  }
}

DocsActiveBlock.propTypes = {
  children: PropTypes.node,
};

export default DocsActiveBlock;
