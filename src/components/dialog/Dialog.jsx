// @flow strict

import * as React from 'react';
import cx from 'classnames';

import {useBodyNoScroll} from './useBodyNoScroll';
import {useFocusTrap} from './useFocusTrap';

export type DialogPropsType = $ReadOnly<{
  open: boolean,
  children: React.Node,
  size?: 's' | 'm' | 'l' | 'xl' | 'fullscreen',
  reduceMotion?: boolean,
  'aria-labelledby'?: string,
  'aria-label'?: string,
  'aria-describedby'?: string,
  /**
   * Specify the dialog scrolling behavior when
   * the content is longer than the viewport.
   */
  scroll?: 'inside' | 'outside',
  zIndex?: number | string,
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
  reduceMotion = false,
  scroll = 'outside',
  'aria-labelledby': ariaLabelledBy,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  zIndex = 'auto',
  onDismiss,
  onEntryTransitionEnd,
  onExitTransitionEnd,
}: DialogPropsType) {
  const overlayRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const [exiting, setExiting] = React.useState<boolean>(false);

  if (exiting === open) {
    setExiting(!open);
  }

  /**
   * The name of transition with the longest duration, because
   * a component can have an animation of many properties.
   */
  const lastTransitionName = exiting || reduceMotion ? 'opacity' : 'transform';

  /**
   * CSS3 transition requires a deferredOpen value to be one
   * paint behind the actual open prop to trigger a transition.
   */
  const [deferredOpen, setDeferredOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    setDeferredOpen(open);
  }, [open]);

  useBodyNoScroll();
  useFocusTrap({dialogRef: containerRef, overlayRef});

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

  const handleKeyUp = React.useCallback(
    event => {
      if (onDismiss && event.key === 'Escape') {
        onDismiss();
      }
    },
    [onDismiss]
  );

  const overlayClass = cx('js-dialog', 'sg-dialog__overlay', {
    'sg-dialog__overlay--scroll': scroll === 'outside',
    'sg-dialog__overlay--open': deferredOpen,
    'sg-dialog__overlay--fullscreen': size === 'fullscreen',
  });

  const containerClass = cx(
    'sg-dialog__container',
    `sg-dialog__container--size-${size}`,
    {
      'sg-dialog__container--scroll': scroll === 'inside',
      'sg-dialog__container--open': deferredOpen,
      'sg-dialog__container--exiting': exiting,
      'sg-dialog__container--reduce-motion': reduceMotion,
    }
  );

  return (
    <div
      className={overlayClass}
      style={{zIndex}}
      onClick={onDismiss ? handleOverlayClick : undefined}
      onKeyUp={handleKeyUp}
      ref={overlayRef}
    >
      {/* `useFocusTrap` is based on checking whether the new focused
      node is a descendants of the container. In order to detect
      the focus event when the dialog is the first or last node,
      bracket the dialog with two invisible, focusable nodes. */}

      <div tabIndex="0" />
      <div
        role="dialog"
        ref={containerRef}
        className={containerClass}
        onTransitionEnd={handleTransitionEnd}
        aria-modal="true"
        aria-labelledby={ariaLabelledBy}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        tabIndex="-1"
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
