import * as React from 'react';
import classnames from 'classnames';

export type ButtonRoundPropsType = {
  children?: React.ReactNode | null | undefined;
  className?: string | null | undefined;
  wide?: boolean | null | undefined;
  disabled?: boolean | null | undefined;
  small?: boolean | null | undefined;
  href?: string;
  label?: string | null | undefined;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  'children' | 'className' | 'wide' | 'disabled' | 'small' | 'href' | 'label'
>;

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

  const buttonClass = classnames('sg-button-solid-round', className);

  return (
    <a {...props} href={href} className={buttonClass}>
      <div className="sg-button-solid-round__icon">{children}</div>
      {labelElem}
    </a>
  );
};

export default ButtonRound;
