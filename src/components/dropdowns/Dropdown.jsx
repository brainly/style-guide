import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DropdownItem from './DropdownItem';

const Dropdown = ({fixed, label, onClick, fullWidth = true, opened, onItemClick, items, className}) => {
  const dropdownClass = classNames('sg-dropdown', className, {
    'sg-dropdown--full-width': fullWidth,
    'sg-dropdown--opened': opened
  });
  const itemsClass = classNames('sg-dropdown__items', {
    'sg-dropdown__items--fixed': fixed
  });

  return <div className={dropdownClass} onClick={onClick}>
    <div className="sg-dropdown__icon"></div>
    <div className="sg-dropdown__hole">
      <div className="sg-dropdown__item-text">
        {label}
      </div>
    </div>
    <div className={itemsClass}>
      {items.map(({id, text}) =>
        <DropdownItem key={id} text={text} id={id} onClick={() => onItemClick(id)}/>
      )}
    </div>
  </div>;
};

Dropdown.propTypes = {
  onClick: PropTypes.func,
  onItemClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  fixed: PropTypes.bool,
  opened: PropTypes.bool,
  items: PropTypes.array.isRequired,
  className: PropTypes.string
};

export default Dropdown;
