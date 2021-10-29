// @flow strict

import * as React from 'react';
import cx from 'classnames';
import Button from '../buttons/Button';
import Icon from '../icons/Icon';

export type DialogCloseButtonPropsType = $ReadOnly<{
  onClick: () => void,
  className?: string,
  label?: string,
}>;

const DialogCloseButton = ({
  onClick,
  className,
  label = 'Close this dialog window',
}: DialogCloseButtonPropsType) => (
  <Button
    type="transparent"
    className={cx('sg-dialog__close-button', className)}
    icon={<Icon type="close" color="dark" size={24} />}
    onClick={onClick}
    aria-label={label}
    iconOnly
  />
);

export default DialogCloseButton;
