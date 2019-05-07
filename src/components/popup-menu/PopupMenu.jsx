// @flow strict

import React from 'react';
import type {Node} from 'react';
import classNames from 'classnames';

type PropsType = {
  items?: Array<Node>,
  extraSpacing?: boolean,
  className?: string
};

const PopupMenu = ({items = [], extraSpacing, className, ...props}: PropsType) => {
  const popupMenuClass = classNames('sg-popup-menu', {
    'sg-popup-menu--elements-spaced': extraSpacing
  }, className);

  return (
    <div {...props} className={popupMenuClass}>
      {items.map((item, i) => <div key={i} className="sg-popup-menu__hole">{item}</div>)}
    </div>
  );
};

export default PopupMenu;
