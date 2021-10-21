// @flow strict

import * as React from 'react';
import cx from 'classnames';
import {__DEV__} from '../utils';

import {useBodyNoScroll} from './useBodyNoScroll';
import {useEscapeKey} from './useEscapeKey';
import {useFocusTrap} from './useFocusTrap';

const durationModerate01 = 180;
const UNMOUNT_DELAY = durationModerate01;

export type DialogPropsType = $ReadOnly<{
  active: boolean,
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
  active,
  children,
  size = 'm',
  fullscreen = false,
  scroll = 'outside',
  onDismiss,
}: DialogPropsType) {
  const containerRef = React.useRef(null);

  useBodyNoScroll();
  useEscapeKey(onDismiss);
  useFocusTrap(containerRef);

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
    'sg-dialog__overlay--active': active,
  });

  const containerClass = cx(
    'sg-dialog__container',
    `sg-dialog__container--size-${size}`,
    {
      'sg-dialog__container--scroll': scroll === 'inside',
      'sg-dialog__container--fullscreen': fullscreen,
      'sg-dialog__container--active': active,
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

function WrappedDialogWithExitTransition({
  active,
  ...otherProps
}: DialogPropsType) {
  const [mounted, setMounted] = React.useState<boolean>(active);

  if (active && !mounted) {
    setMounted(true);
  }

  // CSS3 transition requires an activated variable to be one
  // render behind the active prop to trigger a transition.
  const [activated, setActivated] = React.useState<boolean>(false);

  // enter transition
  React.useLayoutEffect(() => {
    if (mounted) setActivated(true);
  }, [mounted]);

  // exit transition and unmount
  React.useLayoutEffect(() => {
    if (active) return;

    setActivated(false);
    const timeoutId = setTimeout(() => {
      setMounted(false);
    }, UNMOUNT_DELAY);

    return () => clearTimeout(timeoutId);
  }, [active]);

  return mounted ? <Dialog {...otherProps} active={activated} /> : null;
}

if (__DEV__) {
  WrappedDialogWithExitTransition.displayName = 'Dialog';
}

export default WrappedDialogWithExitTransition;
