import * as React from 'react';
import cx from 'classnames';

export type UnstyledButtonPropsType = {
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const UnstyledButton = (props: UnstyledButtonPropsType) => {
  const {className, ...rest} = props;
  const buttonClass = cx('sg-button-unstyled', className);

  return <button {...rest} className={buttonClass} />;
};

export default UnstyledButton;
