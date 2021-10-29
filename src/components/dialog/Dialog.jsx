// @flow strict

import * as React from 'react';
import cx from 'classnames';

import {useBodyNoScroll} from './useBodyNoScroll';
import {useEscapeKey} from './useEscapeKey';
import {useFocusTrap} from './useFocusTrap';

export type DialogPropsType = $ReadOnly<{
  open: boolean,
  children: React.Node,
  size?: 's' | 'm' | 'l' | 'xl',
  fullscreen?: boolean,
  reduceMotion?: boolean,
  /**
   * Specify the dialog scrolling behavior when
   * the content is longer than the viewport.
   */
  scroll?: 'inside' | 'outside',
  /**
   * Fires on user actions like clicking outside
   * the Dialog or the Escape key.
   */
  onDismiss?: () => void,
  onEntryTransitionEnd?: () => void,
  onExitTransitionEnd?: () => void,
}>;

/**
 * The react-docgen has a problem with default values
 * of nested components (see BaseDialog inside the
 * Dialog) and this is for documentation purposes.
 */
Dialog.defaultProps = ({
  size: 'm',
  fullscreen: false,
  reduceMotion: false,
  scroll: 'outside',
}: $Shape<DialogPropsType>);

/**
 * The Dialog component controls mounting
 * when BaseDialog controls its own states.
 */
function BaseDialog({
  open,
  children,
  size = 'm',
  fullscreen = false,
  reduceMotion = false,
  scroll = 'outside',
  onDismiss,
  onEntryTransitionEnd,
  onExitTransitionEnd,
}: DialogPropsType) {
  const containerRef = React.useRef(null);
  const [exiting, setExiting] = React.useState<boolean>(false);

  /**
   * CSS3 transition requires a deferredOpen value to be one
   * paint behind the actual open prop to trigger a transition.
   */
  const [deferredOpen, setDeferredOpen] = React.useState<boolean>(false);

  /**
   * The name of transition with the longest duration, because
   * a component can have an animation of many properties.
   */
  const lastTransitionName = exiting || reduceMotion ? 'opacity' : 'transform';

  React.useEffect(() => {
    setDeferredOpen(open);
  }, [open]);

  if (exiting === open) {
    setExiting(!open);
  }

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

  const handleTransitionEnd = React.useCallback(
    (event: TransitionEvent) => {
      if (
        event.target !== event.currentTarget ||
        event.propertyName !== lastTransitionName
      ) {
        return;
      }

      if (open) {
        if (onEntryTransitionEnd) {
          onEntryTransitionEnd();
        }
      } else if (onExitTransitionEnd) {
        onExitTransitionEnd();
      }
    },
    [open, lastTransitionName, onEntryTransitionEnd, onExitTransitionEnd]
  );

  const overlayClass = cx('sg-dialog__overlay', {
    'sg-dialog__overlay--scroll': scroll === 'outside',
    'sg-dialog__overlay--open': deferredOpen,
  });

  const containerClass = cx(
    'sg-dialog__container',
    `sg-dialog__container--size-${size}`,
    {
      'sg-dialog__container--scroll': scroll === 'inside',
      'sg-dialog__container--fullscreen': fullscreen,
      'sg-dialog__container--open': deferredOpen,
      'sg-dialog__container--exiting': exiting,
      'sg-dialog__container--reduce-motion': reduceMotion,
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
        onTransitionEnd={handleTransitionEnd}
      >
        {children}
      </div>
      <div tabIndex="0" />
    </div>
  );
}

function Dialog({open, onExitTransitionEnd, ...otherProps}: DialogPropsType) {
  const [mounted, setMounted] = React.useState<boolean>(open);

  if (open && !mounted) {
    setMounted(true);
  }

  const handleExitTransitionEnd = React.useCallback(() => {
    setMounted(false);

    // proxy an actual event
    if (onExitTransitionEnd) {
      onExitTransitionEnd();
    }
  }, [onExitTransitionEnd]);

  return mounted ? (
    <BaseDialog
      {...otherProps}
      onExitTransitionEnd={handleExitTransitionEnd}
      open={open}
    />
  ) : null;
}

export default Dialog;
