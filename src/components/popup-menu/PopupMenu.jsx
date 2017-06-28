import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const PopupMenu = ({items = [], extraSpacing}) => {
  const popupMenuClass = classNames('sg-popup-menu', {
    'sg-popup-menu--elements-spaced': extraSpacing
  });

  return <div className={popupMenuClass}>
    {items.map((item, i) => <div key={i} className="sg-popup-menu__hole">{item}</div>)}
  </div>;
};

PopupMenu.propTypes = {
  items: PropTypes.array.isRequired,
  extraSpacing: PropTypes.bool
};

export default PopupMenu;
