import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const Select = props => {
  const {
    valid,
    invalid,
    capitalized,
    fullWidth,
    value,
    className,
    options = [],
    ...additionalProps
  } = props;

  if (valid && invalid) {
    throw {
      name: 'WrongValidation',
      message: 'Select can be either valid or invalid!'
    };
  }

  const selectClass = classnames('sg-select', {
    'sg-select--valid': valid,
    'sg-select--invalid': invalid,
    'sg-select--capitalized': capitalized,
    'sg-select--full-width': fullWidth
  }, className);
  const optionsElements = options.map(({value, text}) =>
    <option key={value} value={value}>{text}</option>
  );

  return (
    <div className={selectClass}>
      <div className="sg-select__icon" />
      <select className="sg-select__element" value={value} {...additionalProps}>
        {optionsElements}
      </select>
    </div>
  );
};

const optionShape = PropTypes.shape({
  value: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
});

Select.propTypes = {
  value: PropTypes.string,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  capitalized: PropTypes.bool,
  fullWidth: PropTypes.bool,
  options: PropTypes.arrayOf(optionShape),
  className: PropTypes.string
};

export default Select;
