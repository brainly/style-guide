import * as React from 'react';
import cx from 'classnames';
import Text from '../text/Text';

export const PETIT_BUTTON_VARIANT = {
  TRANSPARENT: 'transparent',
  TRANSPARENT_INVERTED: 'transparent-inverted',
  TRANSPARENT_LIGHT: 'transparent-light',
  TRANSPARENT_INDIGO: 'transparent-indigo',
  SOLID_LIGHT: 'solid-light',
  SOLID_INDIGO_LIGHT: 'solid-indigo-light',
} as const;

type PetitButtonVariantType =
  | 'transparent'
  | 'transparent-inverted'
  | 'transparent-light'
  | 'transparent-indigo'
  | 'solid-light'
  | 'solid-indigo-light';

export type PetitButtonPropsType = {
  /**
   * Specify variant of the button that you want to use
   * @example <PetitButton variant="solid-light">
   *            button
   *          </PetitButton>
   *
   */
  variant?: PetitButtonVariantType;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const PetitButton = ({
  className,
  variant,
  children,
  ...rest
}: PetitButtonPropsType) => {
  const buttonClass = cx(
    'sg-button-petit',
    `sg-button-petit--${variant}`,
    className
  );

  return (
    <button {...rest} className={buttonClass}>
      <Text className="sg-button-petit__text" weight="bold" size="small">
        {children}
      </Text>
    </button>
  );
};

export default PetitButton;
