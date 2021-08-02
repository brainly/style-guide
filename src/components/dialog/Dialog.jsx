//@flow strict

import * as React from 'react';

export type DialogPropsType = {
  children?: React.Node,
  isOpen: boolean,
  onClose: () => mixed,
  ...
};

const Dialog = ({isOpen, children, onClose, ...rest}: DialogPropsType) => {
  const handleKeyDown = (event: SyntheticKeyboardEvent<>) => {
    if (event.key === 'Escape') {
      onClose?.();
    }
  };

  const handleOverlayClick = (event: SyntheticMouseEvent<>) => {
    if (event.target === event.currentTarget) {
      onClose?.();
    }
  };

  const buttonRef = React.useCallback((button: ?HTMLButtonElement) => {
    if (button) {
      button.focus();
    }
  }, []);

  return isOpen ? (
    <div className="dialog" onKeyDown={handleKeyDown}>
      <div className="dialog__overlay" onClick={handleOverlayClick}>
        <div tabIndex="0" />
        <div
          {...rest}
          className="dialog__content"
          aria-modal="true"
          role="dialog"
        >
          <button
            className="dialog__close-button"
            onClick={() => onClose?.()}
            ref={buttonRef}
          >
            <span className="visually-hidden">Close</span>
            <span aria-hidden="true">×</span>
          </button>
          {children}
        </div>
      </div>
    </div>
  ) : null;
};

export default Dialog;
