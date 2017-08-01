import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PopupMenu = ({items = [], extraSpacing, className}) => {
  const popupMenuClass = classNames('sg-popup-menu', {
    'sg-popup-menu--elements-spaced': extraSpacing
  }, className);

  return <div className={popupMenuClass}>
    {items.map((item, i) => <div key={i} className="sg-popup-menu__hole">{item}</div>)}
  </div>;
};

PopupMenu.propTypes = {
  items: PropTypes.array.isRequired,
  extraSpacing: PropTypes.bool,
  className: PropTypes.string
};

export default PopupMenu;
