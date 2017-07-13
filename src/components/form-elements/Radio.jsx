import React from 'react';
import PropTypes from 'prop-types';
import UUID from 'uuid';

const Radio = props => {
  const {
    checked,
    name,
    id = UUID.v1(),
    ...additionalProps
  } = props;

  return <div className="sg-radio">
    <input className="sg-radio__element" type="radio" checked={checked} name={name} id={id} {...additionalProps}/>
    <label className="sg-radio__ghost" htmlFor={id}></label>
  </div>;
};

Radio.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string
};

export default Radio;
