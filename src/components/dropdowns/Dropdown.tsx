// eslint-disable-next-line import/no-duplicates
import * as React from 'react';
// eslint-disable-next-line import/no-duplicates
import {useEffect, useState, useRef} from 'react';
import classNames from 'classnames';
import Icon, {ICON_COLOR} from '../icons/Icon';

type LinksType = Readonly<{
  label: string;
  url: string;
}>;
export type DropdownPropsType = Readonly<{
  name: string;
  links: Array<LinksType>;
  initiallyOpened?: boolean;
  color?: 'default' | 'white';
  fullWidth?: boolean;
  onItemSelect?: (
    e: React.SyntheticEvent<HTMLAnchorElement>,
    link: LinksType
  ) => void;
}>;

// if possible, use Select component instead
const Dropdown = ({
  name,
  links,
  initiallyOpened,
  color = 'default',
  fullWidth,
  onItemSelect,
}: DropdownPropsType) => {
  const [open, setOpen] = useState(initiallyOpened || false);
  const clickedInside = useRef(false);

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
        'sg-dropdown--white': color === 'white',
        'sg-dropdown--full-width': fullWidth,
      })}
      onClick={handleClickInside}
    >
      <p>{name}</p>
      <Icon
        type={open ? 'chevron_up' : 'chevron_down'}
        size={24}
        color={ICON_COLOR['icon-gray-70']}
        className="sg-dropdown__icon"
      />

      {open && (
        <div className="sg-dropdown__items">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="sg-dropdown__item"
              onClick={onItemSelect ? e => onItemSelect(e, link) : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
