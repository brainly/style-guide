// @flow strict

import * as React from 'react';
import cx from 'classnames';

import {useBodyNoScroll} from './useBodyNoScroll';
import {useFocusTrap} from './useFocusTrap';

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
}>;

type DialogContextType = DialogPropsType & {
  // new
  overlayRef: {current: HTMLElement | null},
  containerRef: {current: HTMLElement | null},

  // shared
  deferredOpen: boolean,
  setDeferredOpen: (value: boolean) => boolean,
  hasFinishedTransition: boolean,
  setHasFinishedTransition: (value: boolean) => boolean,
  isDialogHigherThanOverlay: boolean,
  setIsDialogHigherThanOverlay: (value: boolean) => boolean,
};

const DialogContext = React.createContext<DialogContextType>({});

export function DialogContextProvider({
  children,
  size = 'm',
  scroll = 'outside',
  zIndex = 'auto',
  ...otherProps
}: DialogPropsType) {
  const overlayRef = React.useRef(null);
  const containerRef = React.useRef(null);

  const [deferredOpen, setDeferredOpen] = React.useState<boolean>(false);
  const [hasFinishedTransition, setHasFinishedTransition] =
    React.useState<boolean>(false);
  const [isDialogHigherThanOverlay, setIsDialogHigherThanOverlay] =
    React.useState<boolean>(false);

  const contextData: DialogContextType = {
    ...otherProps,
    size,
    scroll,
    zIndex,

    overlayRef,
    containerRef,

    deferredOpen,
    setDeferredOpen,
    hasFinishedTransition,
    setHasFinishedTransition,
    isDialogHigherThanOverlay,
    setIsDialogHigherThanOverlay,
  };

  return (
    <DialogContext.Provider value={contextData}>
      {children}
    </DialogContext.Provider>
  );
}

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

function BaseDialogOverlay({children}: {children: React.Node}) {
  const {
    size,
    overlayRef,
    deferredOpen,
    hasFinishedTransition,
    isDialogHigherThanOverlay,
    onDismiss,
    zIndex,
  } = React.useContext(DialogContext);

  const overlayClass = cx('js-dialog', 'sg-dialog__overlay', {
    'sg-dialog__overlay--scroll':
      (isDialogHigherThanOverlay || hasFinishedTransition) &&
      scroll === 'outside',
    'sg-dialog__overlay--open': deferredOpen,
    'sg-dialog__overlay--fullscreen': size === 'fullscreen',
  });

  const handleOverlayClick = React.useCallback(
    (event: SyntheticMouseEvent<HTMLDivElement>) => {
      if (onDismiss && event.target === event.currentTarget) {
        onDismiss();
      }
    },
    [onDismiss]
  );

  // move to BaseDialogContainer?
  const handleKeyUp = React.useCallback(
    (event: SyntheticKeyboardEvent<HTMLDivElement>) => {
      if (onDismiss && event.key === 'Escape') {
        onDismiss();
        event.stopPropagation();
      }
    },
    [onDismiss]
  );

  return (
    <div
      className={overlayClass}
      style={{zIndex}}
      onClick={onDismiss ? handleOverlayClick : undefined}
      onKeyUp={handleKeyUp}
      ref={overlayRef}
    >
      {children}
    </div>
  );
}

function BaseDialogContent({children}: {children: React.Node}) {
  return <div className="sg-dialog__content">{children}</div>;
}

/**
 * The Dialog component controls mounting
 * when BaseDialog controls its own states.
 */
function BaseDialogContainer({
  open,
  children,
}: {
  open: boolean,
  children: React.Node,
}) {
  const [exiting, setExiting] = React.useState<boolean>(false);

  const {
    size,
    containerRef,
    overlayRef,
    deferredOpen,
    setDeferredOpen,
    setHasFinishedTransition,
    setIsDialogHigherThanOverlay,
    reduceMotion,
    'aria-labelledby': ariaLabelledBy,
    'aria-label': ariaLabel,
    'aria-describedby': ariaDescribedBy,
    'data-testid': dataTestId,
    onEntryTransitionEnd,
    onExitTransitionEnd,
  } = React.useContext(DialogContext);

  if (exiting === open) {
    setExiting(!open);
  }

  /**
   * The name of transition with the longest duration, because
   * a component can have an animation of many properties.
   */
  const lastTransitionName = exiting || reduceMotion ? 'opacity' : 'transform';

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
  }, [
    setHasFinishedTransition,
    open,
    onExitTransitionEnd,
    onEntryTransitionEnd,
    cleanupBodyNoScroll,
  ]);

  React.useEffect(() => {
    setDeferredOpen(open);

    if (!supportsTransitions()) {
      fireTransitionEndCallbacks();
    }
  }, [open, fireTransitionEndCallbacks, setDeferredOpen]);

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
  }, [open, containerRef, overlayRef, setIsDialogHigherThanOverlay]);

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
    <>
      {/* `useFocusTrap` is based on checking whether the new focused
      node is a descendants of the container. In order to detect
      the focus event when the dialog is the first or last node,
      bracket the dialog with two invisible, focusable nodes. */}
      <div tabIndex="0" />
      {/*  Role dialog - container or just content? */}
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
        tabIndex="-1"
        data-testid={dataTestId}
      >
        {children}
      </div>
      <div tabIndex="0" />
    </>
  );
}

function Dialog({
  open,
  onExitTransitionEnd,
  children,
  ...otherProps
}: DialogPropsType) {
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
    <DialogContextProvider
      {...otherProps}
      onExitTransitionEnd={handleExitTransitionEnd}
    >
      <BaseDialogOverlay>
        {/*<div*/}
        {/*  style={{*/}
        {/*    position: 'absolute',*/}
        {/*    height: '100%',*/}
        {/*    width: '100%',*/}
        {/*    backgroundImage:*/}
        {/*      "url('https://i.picsum.photos/id/350/1000/1000.jpg?hmac=K8UpYK9kXINCijZuHxZF1DIV9JVWMf7fCfuDL3Gtddc')",*/}
        {/*    backgroundSize: 'cover',*/}
        {/*  }}*/}
        {/*/>*/}
        <BaseDialogContainer open={open}>
          <BaseDialogContent>{children}</BaseDialogContent>

          {/*<div style={{height: '100px', width: '900px', background: 'green'}}>*/}
          {/*  <p>helloł</p>*/}
          {/*</div>*/}
        </BaseDialogContainer>
      </BaseDialogOverlay>
    </DialogContextProvider>
  ) : null;
}

export default Dialog;
