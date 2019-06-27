// @flow strict

import React from 'react';

type PropsType = {
  onClick: SyntheticMouseEvent<HTMLDivElement> => mixed,
  text: string
};

const DropdownItem = ({text, onClick}: PropsType) => (
  <div className="sg-dropdown__item-hole" onClick={onClick}>
    <div className="sg-dropdown__item-text">
      {text}
    </div>
  </div>
);

export default DropdownItem;
