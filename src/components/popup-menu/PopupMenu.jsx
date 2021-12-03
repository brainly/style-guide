// @flow strict

import * as React from 'react';
import classNames from 'classnames';

export type PopupMenuPropsType = {
  items: Array<React.Node>,
  extraSpacing?: boolean,
  className?: string,
  ...
};

// deprecated

const PopupMenu = ({
  items = [],
  extraSpacing,
  className,
  ...props
}: PopupMenuPropsType) => {
  const popupMenuClass = classNames(
    'sg-popup-menu',
    {
      'sg-popup-menu--elements-spaced': extraSpacing,
    },
    className
  );

  return (
    <div {...props} className={popupMenuClass}>
      {items.map((item, i) => (
        <div key={i} className="sg-popup-menu__hole">
          {item}
        </div>
      ))}
    </div>
  );
};

export default PopupMenu;
