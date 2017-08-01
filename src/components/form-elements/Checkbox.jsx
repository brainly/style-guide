import React from 'react';
import PropTypes from 'prop-types';
import UUID from 'node-uuid';
import Icon, {TYPE, COLOR} from '../icons/Icon';
import classNames from 'classnames';

const Checkbox = props => {
  const {
    checked,
    id = UUID.v1(),
    className,
    ...additionalProps
  } = props;

  const checkboxClass = classNames('sg-checkbox', className);

  return <div className={checkboxClass}>
    <input className="sg-checkbox__element" type="checkbox" id={id} checked={checked} {...additionalProps}/>
    <label className="sg-checkbox__ghost" htmlFor={id}>
      <Icon type={TYPE.CHECK} color={COLOR.ADAPTIVE} size={10}/>
    </label>
  </div>;
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  id: PropTypes.string,
  className: PropTypes.string
};

export default Checkbox;
