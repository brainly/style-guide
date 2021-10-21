// @flow strict

import * as React from 'react';
import cx from 'classnames';
import {useBodyNoScroll} from './useBodyNoScroll';
import {useFocusTrap} from './useFocusTrap';

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

function Dialog({
  children,
  size = 'm',
  fullscreen = false,
  scroll = 'outside',
  onDismiss,
}: DialogPropsType) {
  const containerRef = React.useRef(null);

  useBodyNoScroll();
  useFocusTrap(containerRef);

  React.useEffect(() => {
    function handleEscapeKey(e: KeyboardEvent) {
      if (onDismiss && e.key === 'Escape') {
        onDismiss();
      }
    }

    window.addEventListener('keyup', handleEscapeKey);
    return () => window.removeEventListener('keyup', handleEscapeKey);
  }, [onDismiss]);

  const handleOverlayClick = React.useCallback(
    (e: SyntheticMouseEvent<HTMLDivElement>) => {
      if (onDismiss && e.target === e.currentTarget) {
        onDismiss();
      }
    },
    [onDismiss]
  );

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

  return (
    <div
      className={overlayClass}
      onClick={onDismiss ? handleOverlayClick : undefined}
    >
      <div role="dialog" ref={containerRef} className={containerClass}>
        {children}
      </div>
    </div>
  );
}

export default Dialog;
