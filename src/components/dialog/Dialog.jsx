// @flow strict

import * as React from 'react';
import cx from 'classnames';

import {useBodyNoScroll} from './useBodyNoScroll';
import {useFocusTrap} from './useFocusTrap';
import DialogOverlay, {SLOTS} from './DialogOverlay';

// https://github.com/jsdom/jsdom/issues/1781
const supportsTransitions = () =>
  Boolean(window && window.TransitionEvent !== undefined);

export type DialogPropsType = $ReadOnly<{
  open: boolean,
  children: React.Node,
  size?: 's' | 'm' | 'l' | 'xl' | 'fullscreen',
  reduceMotion?: boolean,
  'aria-labelledby'?: string,
  'aria-label'?: string,
  'aria-describedby'?: string,
  'aria-description'?: string,
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
  'data-testid'?: string,
  position: 'center' | 'top',
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
  position: 'center',
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
  'aria-description': ariaDescription,
  zIndex = 'auto',
  onDismiss,
  onEntryTransitionEnd,
  onExitTransitionEnd,
  'data-testid': dataTestId,
  position = 'center',
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

  const [hasFinishedTransition, setHasFinishedTransition] =
    React.useState<boolean>(false);

  const [isDialogHigherThanOverlay, setIsDialogHigherThanOverlay] =
    React.useState<boolean>(false);

  const cleanupBodyNoScroll = useBodyNoScroll();

  const fireTransitionEndCallbacks = React.useCallback(() => {
    setHasFinishedTransition(true);

    if (open) {
      if (onEntryTransitionEnd) {
        onEntryTransitionEnd();
      }
    } else if (onExitTransitionEnd) {
      cleanupBodyNoScroll();
      onExitTransitionEnd();
    }
  }, [open, onExitTransitionEnd, onEntryTransitionEnd, cleanupBodyNoScroll]);

  React.useEffect(() => {
    setDeferredOpen(open);

    if (!supportsTransitions()) {
      fireTransitionEndCallbacks();
    }
  }, [open, fireTransitionEndCallbacks]);

  React.useEffect(() => {
    /**
     * Check if Dialog itself is higher than the overlay.
     * We need to check this, so we can determine if we should show scrollbars on the Dialog.
     */
    if (open) {
      // Didn't use optional chaining
      // as it causes ArgsTable and controls to not display correctly
      const dialogHeight =
        containerRef.current &&
        containerRef.current.getBoundingClientRect().height;
      const overlayHeight =
        overlayRef.current && overlayRef.current.getBoundingClientRect().height;

      if (!dialogHeight || !overlayHeight) return;
      if (dialogHeight > overlayHeight) setIsDialogHigherThanOverlay(true);
    }
  }, [open, containerRef, overlayRef]);

  useFocusTrap({
    dialogRef: containerRef,
    overlayRef,
  });

  const handleTransitionEnd = React.useCallback(
    (event: TransitionEvent) => {
      if (
        event.target === event.currentTarget &&
        event.propertyName === lastTransitionName
      ) {
        fireTransitionEndCallbacks();
      }
    },
    [fireTransitionEndCallbacks, lastTransitionName]
  );

  const handleOverlayClick = React.useCallback(
    (event: SyntheticMouseEvent<HTMLDivElement>) => {
      if (onDismiss && event.target === event.currentTarget) {
        onDismiss();
      }
    },
    [onDismiss]
  );

  const handleKeyUp = React.useCallback(
    (event: SyntheticKeyboardEvent<HTMLDivElement>) => {
      if (onDismiss && event.key === 'Escape') {
        onDismiss();
        event.stopPropagation();
      }
    },
    [onDismiss]
  );

  const overlayClass = cx(
    'js-dialog',
    'sg-dialog__overlay',
    `sg-dialog__overlay--size-${size}`,
    {
      'sg-dialog__overlay--scroll':
        (isDialogHigherThanOverlay || hasFinishedTransition) &&
        scroll === 'outside',
      'sg-dialog__overlay--open': deferredOpen,
      'sg-dialog__overlay--fullscreen': size === 'fullscreen',
      'sg-dialog__overlay--space-top': position === 'top',
    }
  );

  const containerClass = cx('sg-dialog__container', {
    'sg-dialog__container--scroll': scroll === 'inside',
    'sg-dialog__container--open': deferredOpen,
    'sg-dialog__container--exiting': exiting,
    'sg-dialog__container--reduce-motion': reduceMotion,
    'sg-dialog__container--top': position === 'top',
  });

  const childrenWithoutSlots = React.useMemo(
    () =>
      React.Children.toArray(children).filter(
        reactNode => reactNode.type !== DialogOverlay
      ),
    [children]
  );

  const childrenWithSlots = React.useMemo(
    () =>
      React.Children.toArray(children).filter(
        reactNode => reactNode.type === DialogOverlay
      ),
    [children]
  );

  const childrenBySlot = React.useMemo(
    () =>
      SLOTS.reduce((acc, next) => {
        childrenWithSlots
          .filter(child => child.props.slot === next)
          .forEach(child => {
            if (!acc[next]) {
              acc[next] = [];
            }

            acc[next].push(child);
          });

        return acc;
      }, {}),
    [childrenWithSlots]
  );

  return (
    <div
      className={overlayClass}
      style={{zIndex}}
      onClick={onDismiss ? handleOverlayClick : undefined}
      onKeyUp={handleKeyUp}
      ref={overlayRef}
    >
      {childrenBySlot.backdrop ? (
        <span className="sg-dialog-overlay-slot--backdrop">
          {childrenBySlot.backdrop}
        </span>
      ) : null}
      {/* `useFocusTrap` is based on checking whether the new focused
      node is a descendants of the container. In order to detect
      the focus event when the dialog is the first or last node,
      bracket the dialog with two invisible, focusable nodes. */}
      <div
        role="dialog"
        ref={containerRef}
        className={containerClass}
        onTransitionEnd={
          supportsTransitions() ? handleTransitionEnd : undefined
        }
        aria-modal="true"
        aria-labelledby={ariaLabelledBy}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        aria-description={ariaDescription}
        tabIndex="-1"
        data-testid={dataTestId}
      >
        {childrenWithoutSlots}
      </div>
      {SLOTS.filter(slot => slot !== 'backdrop').map(slot => (
        <div
          className={`sg-dialog-overlay-slot sg-dialog-overlay-slot--${slot}`}
          key={slot}
        >
          {childrenBySlot[slot] ? childrenBySlot[slot] : null}
        </div>
      ))}
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

Dialog.Overlay = DialogOverlay;

export default Dialog;
