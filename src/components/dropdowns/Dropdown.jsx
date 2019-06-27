// @flow strict

import React from 'react';
import classNames from 'classnames';
import DropdownItem from './DropdownItem';

function getOnClick(onItemClick, id) {
  return () => onItemClick(id);
}

type PropsType = {
  onClick?: SyntheticMouseEvent<HTMLDivElement>,
  onItemClick: string => mixed,
  label: string,
  fullWidth?: boolean,
  fixed?: boolean,
  opened?: boolean,
  items: Array<{
    id: string,
    text: string
  }>,
  className?: string
};

const Dropdown = ({fixed, label, onClick, fullWidth = true, opened, onItemClick, items = [], className}: PropsType) => {
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

export default Dropdown;
