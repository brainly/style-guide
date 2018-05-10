import React from 'react';
import PropTypes from 'prop-types';
import UUID from 'node-uuid';
import classNames from 'classnames';

export const RADIO_SIZE = {
  NORMAL: 'normal',
  LARGE: 'large'
};

const Radio = props => {
  const {
    checked,
    name,
    size,
    className,
    id = UUID.v1(),
    ...additionalProps
  } = props;

  const radioClass = classNames('sg-radio', {
    [`sg-radio--${size}`]: size !== RADIO_SIZE.NORMAL
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
  size: PropTypes.oneOf(Object.values(RADIO_SIZE)),
  className: PropTypes.string
};

export default Radio;
