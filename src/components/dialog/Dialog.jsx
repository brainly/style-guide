// @flow strict

import * as React from 'react';
import cx from 'classnames';

export type DialogPropsType = {
  children: React.Node,
  size?: 's' | 'm' | 'l' | 'xl',
  fullscreen?: boolean,
  /**
   * Specify the dialog scrolling behavior when
   * the content is longer than the viewport.
   *
   * - `inside` - height is equal to the viewport and the dialog scrolls
   * - `outside` - height is equal to the content and the overlay scrolls
   */
  scroll?: 'inside' | 'outside',
  /**
   * Fires on the user's actions: the Escape key, click outside the dialog.
   */
  onEscapeAction?: () => void,
};

const Dialog = (props: DialogPropsType) => {
  const {
    children,
    size = 'm',
    fullscreen = false,
    scroll = 'outside',
    onEscapeAction,
  } = props;

  const overlayClass = cx('sg-dialog__overlay', {
    'sg-dialog__overlay--scroll': scroll === 'outside',
  });

  const containerClass = cx(
    'sg-dialog__container',
    `sg-dialog__container--size-${size}`,
    {
      'sg-dialog__container--scroll': scroll === 'outside',
      'sg-dialog__container--fullscreen': fullscreen,
    }
  );

  function handleOverlayClick(e: SyntheticMouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      onEscapeAction?.();
    }
  }

  function handleOverlayKeyup(e: SyntheticKeyboardEvent<HTMLDivElement>) {
    if (e.key === 'Escape') {
      onEscapeAction?.();
    }
  }

  return (
    <div
      className={overlayClass}
      onClick={onEscapeAction ? handleOverlayClick : undefined}
      onKeyUp={onEscapeAction ? handleOverlayKeyup : undefined}
    >
      <div className={containerClass}>{children}</div>
    </div>
  );
};

export default Dialog;
