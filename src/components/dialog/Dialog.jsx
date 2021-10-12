// @flow strict

import * as React from 'react';
import cx from 'classnames';
import {__DEV__} from '../utils';

export type DialogPropsType = $ReadOnly<{
  children: React.Node,
  size?: 's' | 'm' | 'l' | 'xl',
  fullscreen?: boolean,
  /**
   * Specify the dialog scrolling behavior when
   * the content is longer than the viewport.
   */
  scroll?: 'inside' | 'outside',
  /**
   * Fires on the user's actions such as click
   * outside the dialog or the Escape key.
   */
  onDismiss?: () => void,
}>;

const Dialog = React.forwardRef<DialogPropsType, HTMLElement>(
  (props: DialogPropsType, ref) => {
    const {
      children,
      size = 'm',
      fullscreen = false,
      scroll = 'outside',
      onDismiss,
    } = props;

    const overlayClass = cx('sg-dialog__overlay', {
      'sg-dialog__overlay--scroll': scroll === 'outside',
    });

    const containerClass = cx(
      'sg-dialog__container',
      `sg-dialog__container--size-${size}`,
      {
        'sg-dialog__container--scroll': scroll === 'inside',
        'sg-dialog__container--fullscreen': fullscreen,
      }
    );

    function handleOverlayClick(e: SyntheticMouseEvent<HTMLDivElement>) {
      if (e.target === e.currentTarget && onDismiss) {
        onDismiss();
      }
    }

    function handleOverlayKeyup(e: SyntheticKeyboardEvent<HTMLDivElement>) {
      if (e.key === 'Escape' && onDismiss) {
        onDismiss();
      }
    }

    return (
      <div
        className={overlayClass}
        onClick={onDismiss ? handleOverlayClick : undefined}
        onKeyUp={onDismiss ? handleOverlayKeyup : undefined}
      >
        <div ref={ref} className={containerClass}>
          {children}
        </div>
      </div>
    );
  }
);

if (__DEV__) {
  Dialog.displayName = 'Dialog';
}

export default Dialog;
