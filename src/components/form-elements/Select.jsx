import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const VALIDATION = {
  VALID: true,
  INVALID: false,
  UNDEFINED: undefined
};


const Select = props => {
  const {
    valid = VALIDATION.UNDEFINED,
    fullWidth,
    value,
    options = [],
    ...additionalProps
  } = props;

  const selectClass = classnames('sg-select', {
    'sg-select--valid': valid === VALIDATION.VALID,
    'sg-select--invalid': valid === VALIDATION.INVALID,
    'sg-select--full-width': fullWidth
  });
  const optionsElements = options.map(({value, text}) =>
    <option key={value} value={value}>{text}</option>
  );

  return <div className={selectClass}>
    <div className="sg-select__icon">
      <svg className="sg-icon sg-icon--x8 sg-icon--gray">
        <path fill="#9fa6b5" d="M0 1l4 6 4-6"/>
      </svg>
    </div>
    <select className="sg-select__element" value={value} {...additionalProps}>
      {optionsElements}
    </select>
  </div>;
};


const optionShape = PropTypes.shape({
  value: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
});

Select.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  valid: PropTypes.oneOf(Object.values(VALIDATION)),
  fullWidth: PropTypes.bool,
  options: PropTypes.arrayOf(optionShape)
};

export default Select;
export {VALIDATION};
