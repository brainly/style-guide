import React from 'react';
import PropTypes from 'prop-types';
import UUID from 'node-uuid';
import classNames from 'classnames';

const Radio = props => {
  const {
    checked,
    name,
    large,
    className,
    id = UUID.v1(),
    ...additionalProps
  } = props;

  const radioClass = classNames('sg-radio', {
    'sg-radio--large': large
  }, className);

  return (
    <div className={radioClass}>
      <input className="sg-radio__element" type="radio" checked={checked} name={name} id={id} {...additionalProps} />
      <label className="sg-radio__ghost" htmlFor={id} />
    </div>
  );
};

Radio.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string,
  large: PropTypes.bool,
  className: PropTypes.string
};

export default Radio;
