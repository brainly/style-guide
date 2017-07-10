import React from 'react';
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
  function inputChanged(e) {
    console.log(e);
  }

  const content = Object.keys(settings).map(key => {
    const value = settings[key];

    function stringifyIfNeeded(item) {
      return typeof item === 'string' ? item : JSON.stringify(item);
    }

    if (Array.isArray(value)) {
      return <label key={key}>{key}:
        <select data-key={key} onChange={inputChanged}>
        {value.map(item => <option key={stringifyIfNeeded(item)} value={item}>{stringifyIfNeeded(item)}</option>)}
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

    return <label key={key}>{key}: <input type={inputType} data-key={key} data-value-type={type} onChange={inputChanged}/></label>
  });

  return <fieldset className="docs-block__settings">{content}</fieldset>;
};

ComponentSettings.propTypes = {
  settings: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};


const DocsActiveBlock = ({children, settings}) => {
  function setProps(key, value) {
    if(Array.isArray(children)) {
      children.forEach(child => child.props[key] = value);
    } else {
      children.props[key] = value;
    }
  }

  return <section className="docs-block">
    <ContentBlock>{children}</ContentBlock>
    <ComponentSettings onChange={setProps} settings={settings}/>
  </section>;
};

DocsActiveBlock.propTypes = {
  children: PropTypes.node,
};

export default DocsActiveBlock;
