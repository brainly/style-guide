import React from 'react';
import PropTypes from 'prop-types';
import UUID from 'node-uuid';
import classNames from 'classnames';

const Radio = props => {
  const {
    checked,
    name,
    className,
    id = UUID.v1(),
    ...additionalProps
  } = props;

  const radioClass = classNames('sg-radio', className);

  return (
    <div className={radioClass}>
      <input className="sg-radio__element" type="radio" checked={checked} name={name} id={id} {...additionalProps} />
      <label className="sg-radio__ghost" htmlFor={id}></label>
    </div>
  );
};

Radio.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string
};

export default Radio;
