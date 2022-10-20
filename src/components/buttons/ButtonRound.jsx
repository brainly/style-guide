// @flow strict

import * as React from 'react';
import classnames from 'classnames';

export type ButtonRoundPropsType = {
  children?: ?React.Node,
  className?: ?string,
  wide?: ?boolean,
  disabled?: ?boolean,
  small?: ?boolean,
  href?: string,
  label?: ?string,
  ...
};

const ButtonRound = ({
  label,
  children,
  href = '#',
  className,
  ...props
}: ButtonRoundPropsType) => {
  let labelElem;

  if (label !== undefined && label !== null && label !== '') {
    labelElem = <span className="sg-button-solid-round__label">{label}</span>;
  }
  const buttonClass = classnames(
    'sg-button-solid-round',
    'sg-focus',
    className
  );

  return (
    <a {...props} href={href} className={buttonClass}>
      <div className="sg-button-solid-round__icon">{children}</div>
      {labelElem}
    </a>
  );
};

export default ButtonRound;
