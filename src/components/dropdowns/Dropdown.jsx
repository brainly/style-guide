// @flow strict

import React, {useEffect, useState, useRef} from 'react';
import classNames from 'classnames';

import Icon from '../icons/Icon';

type LinksType = $ReadOnly<{
  label: string,
  url: string,
}>;

type PropsType = $ReadOnly<{
  name: string,
  links: Array<LinksType>,
  initiallyOpened?: boolean,
  colorMode?: 'dark' | 'light',
  fullWidth?: boolean,
}>;

// if possible, use Select component instead
const Dropdown = ({
  name,
  links,
  initiallyOpened,
  colorMode = 'dark',
  fullWidth,
}: PropsType) => {
  const [open, setOpen] = useState(initiallyOpened || false);
  const clickedInside = useRef(false);

  const lightMode = colorMode === 'light';

  function handleClickInside() {
    setOpen(prevOpen => !prevOpen);
    clickedInside.current = true;
  }

  function handleClickOutside() {
    if (clickedInside.current) {
      clickedInside.current = false;
      return;
    }
    setOpen(false);
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div
      className={classNames('sg-dropdown', {
        'sg-dropdown--opened': open,
        'sg-dropdown--light': lightMode,
        'sg-dropdown--full-width': fullWidth,
      })}
      onClick={handleClickInside}
    >
      <p>{name}</p>
      <Icon type={open ? 'arrow_up' : 'arrow_down'} size={24} color="gray" />

      {open && (
        <div className="sg-dropdown__items">
          {links.map((link, index) => (
            <a key={index} href={link.url} className="sg-dropdown__item">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
