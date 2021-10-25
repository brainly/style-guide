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

type InternalDialogPropsType = $ReadOnly<{
  ...BasePropsType,
  onTransitionEnd: (event: TransitionEvent) => void,
}>;

export type DialogPropsType = $ReadOnly<{
  ...BasePropsType,
  onEntryTransitionEnd?: () => void,
  onExitTransitionEnd?: () => void,
}>;

/**
 * The react-docgen has a problem with default values
 * of nested components (see InternalDialog inside the
 * Dialog) and this is for documentation purposes.
 */
Dialog.defaultProps = ({
  size: 'm',
  fullscreen: false,
  scroll: 'outside',
}: $Shape<DialogPropsType>);

/**
 * Dialog component controls mounting and transitions
 * when InternalDialog controls its own states.
 */
function InternalDialog({
  open,
  children,
  size = 'm',
  fullscreen = false,
  scroll = 'outside',
  onDismiss,
  onTransitionEnd,
}: InternalDialogPropsType) {
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
      {/* Bracket the dialog with two invisible, focusable nodes to keep
      focus inside the page when the dialog is the first or last node. */}
      <div tabIndex="0" />
      <div
        role="dialog"
        ref={containerRef}
        className={containerClass}
        onTransitionEnd={onTransitionEnd}
      >
        {children}
      </div>
      <div tabIndex="0" />
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

  if (open && !mounted) {
    setMounted(true);
  }

  // CSS3 transition requires a deferredOpen value to be one
  // paint behind the actual open prop to trigger a transition.
  const [deferredOpen, setDeferredOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    setDeferredOpen(open);
  }, [open]);

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
    <InternalDialog
      {...otherProps}
      onTransitionEnd={handleTransitionEnd}
      open={deferredOpen}
    />
  ) : null;
}

export default Dialog;
