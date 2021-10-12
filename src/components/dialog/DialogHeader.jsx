// @flow strict

import * as React from 'react';
import Button from '../buttons/Button';
import Icon from '../icons/Icon';

export type DialogHeaderPropsType = $ReadOnly<{
  children?: React.Node,
  onCloseButtonClick: () => void,
}>;

const DialogHeader = ({
  children,
  onCloseButtonClick,
}: DialogHeaderPropsType) => {
  return (
    <div className="sg-dialog__header">
      <Button
        type="transparent"
        className="sg-dialog__close-button"
        icon={<Icon type="close" color="dark" size={24} />}
        onClick={onCloseButtonClick}
        iconOnly
      />
      {children}
    </div>
  );
};

export default DialogHeader;
