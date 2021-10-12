// @flow strict

import * as React from 'react';
import Button from '../buttons/Button';
import Icon from '../icons/Icon';

export type DialogCloseButtonPropsType = $ReadOnly<{
  onClick: () => void,
}>;

const DialogCloseButton = ({onClick}: DialogCloseButtonPropsType) => (
  <Button
    className="sg-dialog__close-button"
    type="transparent"
    icon={<Icon type="close" color="dark" size={24} />}
    onClick={onClick}
    iconOnly
  />
);

export default DialogCloseButton;
