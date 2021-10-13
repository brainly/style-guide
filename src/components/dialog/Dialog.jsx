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
   * outside the Dialog or the Escape key.
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

    const handleOverlayClick = React.useCallback(
      (e: SyntheticMouseEvent<HTMLDivElement>) => {
        if (onDismiss && e.target === e.currentTarget) {
          onDismiss();
        }
      },
      [onDismiss]
    );

    React.useEffect(() => {
      function handleEscapeKey(e: KeyboardEvent) {
        if (onDismiss && e.key === 'Escape') {
          onDismiss();
        }
      }

      window.addEventListener('keyup', handleEscapeKey);
      return () => window.removeEventListener('keyup', handleEscapeKey);
    }, [onDismiss]);

    return (
      <div
        className={overlayClass}
        onClick={onDismiss ? handleOverlayClick : undefined}
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
