import React from 'react';
import PropTypes from 'prop-types';
import Icon, {TYPE, COLOR} from '../icons/Icon';
import UUID from 'uuid';

const Checkbox = props => {
  const {
    checked,
    id = UUID.v1(),
    ...additionalProps
  } = props;

  return <div className="sg-checkbox">
    <input className="sg-checkbox__element" type="checkbox" id={id} checked={checked} {...additionalProps}/>
    <label className="sg-checkbox__ghost" htmlFor={id}>
      <Icon type={TYPE.CHECK} color={COLOR.ADAPTIVE} size={10}/>
    </label>
  </div>;
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  id: PropTypes.string
};

export default Checkbox;
