// @flow strict

import React from 'react';
import type {Node} from 'react';
import classnames from 'classnames';

type ButtonRoundType = {
  children?: ?Node,
  className?: ?string,
  wide?: ?boolean,
  disabled?: ?boolean,
  small?: ?boolean,
  href?: string,
  label?: ?string,
};

const ButtonRound = ({
  label,
  children,
  href = '#',
  className,
  ...props
}: ButtonRoundType) => {
  let labelElem;

  if (label !== undefined && label !== null && label !== '') {
    labelElem = <span className="sg-button-primary-round__label">{label}</span>;
  }
  const buttonClass = classnames('sg-button-primary-round', className);

  return (
    <a {...props} href={href} className={buttonClass}>
      <div className="sg-button-primary-round__icon">{children}</div>
      {labelElem}
    </a>
  );
};

export default ButtonRound;
