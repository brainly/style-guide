// @flow strict

import React, {useEffect, useState, useRef} from 'react';
import classNames from 'classnames';

import Icon from '../icons/Icon';

type LinksType = {
  label: string,
  url: string,
};

type PropsType = {
  name: string,
  links: $ReadOnlyArray<LinksType>,
};

const Dropdown = ({name, links}: PropsType) => {
  const [open, setOpen] = useState(false);
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
      className={classNames('sg-dropdown', {'sg-dropdown--opened': open})}
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
