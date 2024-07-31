import * as React from 'react';
import cx from 'classnames';
import {useBodyNoScroll} from './useBodyNoScroll';
import {useFocusTrap} from './useFocusTrap';
import DialogOverlay, {SLOTS} from './DialogOverlay';

// https://github.com/jsdom/jsdom/issues/1781
const supportsTransitions = () =>
  typeof window !== 'undefined' &&
  typeof window.TransitionEvent !== 'undefined';

export type DialogPropsType = Readonly<{
  open: boolean;
  children: React.ReactNode;
  size?: 's' | 'm' | 'l' | 'xl' | 'fullscreen';
  motionPreset?: 'none' | 'default';
  'aria-labelledby'?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-description'?: string;
  /**
   * https://github.com/w3c/aria-practices/issues/1241
   * Fix for Safari, when multiple nodes with aria-modal="true" exists.
   * Use this to set aria-modal to "false" when you open another (no need when nesting) dialog.
   * This will prevent loosing focus on last opened dialog.
   */
  'aria-modal'?: boolean;
  /**
   * Specify the dialog scrolling behavior when
   * the content is longer than the viewport.
   */
  scroll?: 'inside' | 'outside';
  zIndex?: number | string;

  /**
   * Fires on user actions like clicking outside
   * the Dialog or the Escape key.
   */
  onDismiss?: () => void;
  onEntryTransitionEnd?: () => void;
  onExitTransitionEnd?: () => void;
  'data-testid'?: string;
  position?: 'center' | 'top';
  overlay?: 'light' | 'dark';
  appearance?: 'none' | 'dialog';
}>;

/**
 * The Dialog component controls mounting
 * when BaseDialog controls its own states.
 */
const BaseDialog = ({
  open,
  children,
  size = 'm',
  motionPreset = 'default',
  scroll = 'outside',
  'aria-labelledby': ariaLabelledBy,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  'aria-description': ariaDescription,
  'aria-modal': ariaModal = true,
  zIndex = 'auto',
  onDismiss,
  onEntryTransitionEnd,
  onExitTransitionEnd,
  'data-testid': dataTestId,
  position = 'center',
  overlay = 'light',
  appearance = 'dialog',
}: DialogPropsType) => {
  const overlayRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [exiting, setExiting] = React.useState<boolean>(false);

  if (exiting === open) {
    setExiting(!open);
  }

  /**
   * The name of transition with the longest duration, because
   * a component can have an animation of many properties.
   */
  const lastTransitionName = exiting ? 'opacity' : 'transform';

  /**
   * CSS3 transition requires a deferredOpen value to be one
   * paint behind the actual open prop to trigger a transition.
   */
  const [deferredOpen, setDeferredOpen] = React.useState<boolean>(false);
  const [hasFinishedTransition, setHasFinishedTransition] =
    React.useState<boolean>(false);
  const [isDialogHigherThanOverlay, setIsDialogHigherThanOverlay] =
    React.useState<boolean>(false);
  const hasAnimations = supportsTransitions() && motionPreset !== 'none';
  const cleanupBodyNoScroll = useBodyNoScroll(overlayRef);
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

    if (!hasAnimations) {
      fireTransitionEndCallbacks();
    }
  }, [open, hasAnimations, fireTransitionEndCallbacks]);
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
    (event: React.TransitionEvent<HTMLDivElement>) => {
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
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (
        onDismiss &&
        event.target instanceof HTMLElement &&
        event.target.closest('[data-dialog-container="true"]') !==
          containerRef.current
      ) {
        onDismiss();
      }

      event.stopPropagation();
    },
    [onDismiss]
  );
  const handleKeyUp = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
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
    `sg-dialog__overlay--open--${overlay}`,
    `sg-dialog__overlay--motion-${motionPreset}`,
    {
      'sg-dialog__overlay--scroll':
        (isDialogHigherThanOverlay || hasFinishedTransition) &&
        scroll === 'outside',
      'sg-dialog__overlay--open': deferredOpen,
      'sg-dialog__overlay--fullscreen': size === 'fullscreen',
      'sg-dialog__overlay--space-top': position === 'top',
    }
  );
  const containerClass = cx(
    'sg-dialog__container',
    `sg-dialog__container--motion-${motionPreset}`,
    {
      'sg-dialog__container--fullscreen': size === 'fullscreen',
      'sg-dialog__container--scroll': scroll === 'inside',
      'sg-dialog__container--open': deferredOpen,
      'sg-dialog__container--exiting': exiting,
      'sg-dialog__container--top': position === 'top',
      'sg-dialog__container--appearance-dialog': appearance === 'dialog',
      'sg-dialog__container--fullscreen--motion-none':
        size === 'fullscreen' && motionPreset === 'none',
      'sg-dialog__container--fullscreen--motion-default':
        size === 'fullscreen' && motionPreset === 'default',
    }
  );
  const childrenWithoutSlots = React.useMemo(
    () =>
      React.Children.toArray(children).filter(
        reactNode =>
          (React.isValidElement(reactNode) &&
            reactNode.type !== DialogOverlay) ||
          !React.isValidElement(reactNode)
      ),
    [children]
  );
  const childrenWithSlots = React.useMemo(
    () =>
      React.Children.toArray(children).filter(
        reactNode =>
          React.isValidElement(reactNode) && reactNode.type === DialogOverlay
      ),
    [children]
  );

  type ReduceReturnType = Record<typeof SLOTS[number], [React.ReactNode?]>;
  const childrenBySlot = React.useMemo(
    () =>
      SLOTS.reduce<ReduceReturnType>((acc, next) => {
        childrenWithSlots
          .filter(
            child =>
              React.isValidElement<{slot: typeof next}>(child) &&
              child.props.slot === next
          )
          .forEach(child => {
            if (!acc[next]) {
              acc[next] = [];
            }

            acc[next].push(child);
          });
        return acc;
      }, {} as ReduceReturnType),
    [childrenWithSlots]
  );

  return (
    <div
      className={overlayClass}
      style={{
        zIndex,
      }}
      onClick={onDismiss ? handleOverlayClick : undefined}
      onKeyUp={handleKeyUp}
      ref={overlayRef}
    >
      {childrenBySlot.backdrop ? (
        <span className="sg-dialog-overlay-slot--backdrop">
          {childrenBySlot.backdrop}
        </span>
      ) : null}
      {SLOTS.filter(slot => slot !== 'backdrop').map(slot => (
        <div
          className={cx(
            'sg-dialog-overlay-slot',
            `sg-dialog-overlay-slot--${slot}`,
            {
              'sg-dialog-overlay-slot--hidden':
                !childrenBySlot[slot] || size === 'fullscreen',
            }
          )}
          key={slot}
        >
          {childrenBySlot[slot] ? childrenBySlot[slot] : null}
        </div>
      ))}
      {/* `useFocusTrap` is based on checking whether the new focused
      node is a descendants of the container. In order to detect
      the focus event when the dialog is the first or last node,
      bracket the dialog with two invisible, focusable nodes. */}
      <div tabIndex={0} />
      <div
        role="dialog"
        ref={containerRef}
        data-dialog-container
        className={containerClass}
        onTransitionEnd={hasAnimations ? handleTransitionEnd : undefined}
        aria-modal={ariaModal}
        aria-labelledby={ariaLabelledBy}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        aria-description={ariaDescription}
        tabIndex={-1}
        data-testid={dataTestId}
        data-animating={!hasFinishedTransition}
      >
        {childrenWithoutSlots}
      </div>
      <div tabIndex={0} />
    </div>
  );
};

const Dialog = ({
  open,
  onExitTransitionEnd,
  ...otherProps
}: DialogPropsType) => {
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
};

Dialog.Overlay = DialogOverlay;
export default Dialog;
