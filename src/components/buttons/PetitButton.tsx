import * as React from 'react';
import cx from 'classnames';
import Text from '../text/Text';

export type PetitButtonPropsType = {
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const PetitButton = (props: PetitButtonPropsType) => {
  const {className, children, ...rest} = props;
  const buttonClass = cx('sg-button-petit', className);

  return (
    <button {...rest} className={buttonClass}>
      <Text className="sg-button-petit__text" weight="bold" size="small">
        {children}
      </Text>
    </button>
  );
};

export default PetitButton;
