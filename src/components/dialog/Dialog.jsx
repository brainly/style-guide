// @flow strict

import * as React from 'react';
import cx from 'classnames';

import {useBodyNoScroll} from './useBodyNoScroll';
import {useEscapeKey} from './useEscapeKey';
import {useFocusTrap} from './useFocusTrap';

type BasePropsType = $ReadOnly<{
  open: boolean,
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

export type DialogPropsType = $ReadOnly<{
  ...BasePropsType,
  onEntryTransitionEnd?: () => void,
  onExitTransitionEnd?: () => void,
}>;

function BaseDialog({
  open,
  children,
  size = 'm',
  fullscreen = false,
  scroll = 'outside',
  onDismiss,
  onTransitionEnd,
}: {
  ...BasePropsType,
  onTransitionEnd: (event: TransitionEvent) => void,
}) {
  const containerRef = React.useRef(null);

  useBodyNoScroll();
  useEscapeKey(onDismiss);
  useFocusTrap(containerRef);

  const handleOverlayClick = React.useCallback(
    (event: SyntheticMouseEvent<HTMLDivElement>) => {
      if (onDismiss && event.target === event.currentTarget) {
        onDismiss();
      }
    },
    [onDismiss]
  );

  const overlayClass = cx('sg-dialog__overlay', {
    'sg-dialog__overlay--scroll': scroll === 'outside',
    'sg-dialog__overlay--open': open,
  });

  const containerClass = cx(
    'sg-dialog__container',
    `sg-dialog__container--size-${size}`,
    {
      'sg-dialog__container--scroll': scroll === 'inside',
      'sg-dialog__container--fullscreen': fullscreen,
      'sg-dialog__container--open': open,
    }
  );

  return (
    <div
      className={overlayClass}
      onClick={onDismiss ? handleOverlayClick : undefined}
    >
      <div
        role="dialog"
        ref={containerRef}
        className={containerClass}
        onTransitionEnd={onTransitionEnd}
      >
        {children}
      </div>
    </div>
  );
}

function Dialog({
  open,
  onEntryTransitionEnd,
  onExitTransitionEnd,
  ...otherProps
}: DialogPropsType) {
  const [mounted, setMounted] = React.useState<boolean>(open);

  // CSS3 transition requires a deferredOpen value to be one
  // paint behind the actual open prop to trigger a transition.
  const [deferredOpen, setDeferredOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (open) {
      setMounted(true);
    } else {
      setDeferredOpen(false);
    }
  }, [open]);

  React.useEffect(() => {
    if (mounted) {
      setDeferredOpen(true);
    }
  }, [mounted]);

  const handleTransitionEnd = React.useCallback(
    (event: TransitionEvent) => {
      if (
        event.target !== event.currentTarget ||
        event.propertyName !== 'transform'
      ) {
        return;
      }

      if (open) {
        if (onEntryTransitionEnd) {
          onEntryTransitionEnd();
        }
      } else {
        setMounted(false);
        if (onExitTransitionEnd) {
          onExitTransitionEnd();
        }
      }
    },
    [open, onEntryTransitionEnd, onExitTransitionEnd]
  );

  return mounted ? (
    <BaseDialog
      {...otherProps}
      onTransitionEnd={handleTransitionEnd}
      open={deferredOpen}
    />
  ) : null;
}

export default Dialog;
