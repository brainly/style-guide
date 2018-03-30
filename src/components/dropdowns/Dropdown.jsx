import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DropdownItem from './DropdownItem';

function getOnClick(onItemClick, id) {
  return () => onItemClick(id);
}

const Dropdown = ({fixed, label, onClick, fullWidth = true, opened, onItemClick, items = [], className}) => {
  const dropdownClass = classNames('sg-dropdown', {
    'sg-dropdown--full-width': fullWidth,
    'sg-dropdown--opened': opened
  }, className);
  const itemsClass = classNames('sg-dropdown__items', {
    'sg-dropdown__items--fixed': fixed
  });

  return (
    <div className={dropdownClass} onClick={onClick}>
      <div className="sg-dropdown__icon" />
      <div className="sg-dropdown__hole">
        <div className="sg-dropdown__item-text">
          {label}
        </div>
      </div>
      <div className={itemsClass}>
        {items.map(({id, text}) =>
          <DropdownItem key={id} text={text} id={id} onClick={getOnClick(onItemClick, id)} />
        )}
      </div>
    </div>
  );
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
