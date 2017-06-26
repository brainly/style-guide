import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon, {types as iconTypes, colors as iconColors} from '../icons/Icon';
import DropdownItem from './DropdownItem';

const Dropdown = ({fullWidth = true, opened, ...props}) => {
  const dropdownClass = classNames('sg-dropdown', {
    'sg-dropdown--full-width': fullWidth,
    'sg-dropdown--opened': opened
  });

  return <div className={dropdownClass} onClick={props.onClick}>
    <div className="sg-dropdown__icon">
      <Icon size={8} color={iconColors.gray} type={iconTypes.arrow_down}/>
    </div>
    <div className="sg-dropdown__hole">
      <div className="sg-dropdown__item-text">
        {props.label}
      </div>
    </div>
    <div className="sg-dropdown__items">
      {props.items.map(item =>
        <DropdownItem key={item.id} text={item.text} id={item.id} onClick={props.onItemClick}/>
      )}
    </div>
  </div>;
};

Dropdown.propTypes = {
  onClick: PropTypes.func,
  onItemClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  opened: PropTypes.bool,
  items: PropTypes.array.isRequired
};

export default Dropdown;
