import * as React from 'react';
import cx from 'classnames';

export type UnstyledButtonPropsType = {
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const UnstyledButton = React.forwardRef<HTMLButtonElement, ButtonPropsType>(
  (props, ref) => {
    const {className, ...rest} = props;
    const buttonClass = cx('sg-button-unstyled', className);

    return <button {...rest} ref={ref} className={buttonClass} />;
  }
);

export default UnstyledButton;
