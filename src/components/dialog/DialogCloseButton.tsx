import * as React from 'react';
import cx from 'classnames';
import Button from '../buttons/Button';
import Icon, {ICON_COLOR} from '../icons/Icon';

export type DialogCloseButtonPropsType = Readonly<{
  onClick?: () => void;
  className?: string;
  label?: string;
  'data-testid'?: string;
  disabled?: boolean;
}>;

const DialogCloseButton = ({
  onClick,
  className,
  label = 'Close this dialog window',
  'data-testid': dataTestId,
  disabled,
}: DialogCloseButtonPropsType) => (
  <Button
    variant="transparent"
    className={cx('sg-dialog__close-button', className)}
    icon={<Icon type="close" color={ICON_COLOR['icon-black']} size={24} />}
    onClick={onClick}
    aria-label={label}
    iconOnly
    data-testid={dataTestId}
    disabled={disabled}
    type="button"
  />
);

export default DialogCloseButton;
