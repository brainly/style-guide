// @flow strict

import * as React from 'react';
import TopLayer from '../toplayer/TopLayer';
import type {PropsType as TopLayerPropsType} from '../toplayer/TopLayer';
import Overlay from '../overlay/Overlay';

const OVERLAY_CLASS_NAME = 'sg-overlay';

type PropsType = {
  onOverlayClick?: (event?: SyntheticEvent<HTMLElement>) => mixed,
  closeModal?: () => mixed,
  lead?: boolean,
  children: React.Node,
  noPadding?: boolean,
  transparent?: boolean,
  size?: 'small' | 'medium' | 'large' | 'fluid',
  style?: {[string]: string, ...},
  className?: string,
  overlayColor?: 'blue' | 'dark',
  overlayClassName?: string,
  // Rest of top layer props
  onCloseButtonKeyDown?: (
    event: SyntheticKeyboardEvent<HTMLInputElement>
  ) => mixed,
  fill?: boolean,
  modal?: boolean,
  withBugbox?: boolean,
  smallSpaced?: boolean,
  splashScreen?: boolean,
  limitedWidth?: boolean,
  row?: boolean,
  ...
};

const decorateOverlayClick = onOverlayClick => (
  event?: SyntheticEvent<HTMLElement>
) =>
  event &&
  event.currentTarget.classList.contains(OVERLAY_CLASS_NAME) &&
  (event.target: window.HTMLInputElement).classList.contains(OVERLAY_CLASS_NAME)
    ? onOverlayClick(event)
    : undefined;

export default function Modal({
  children,
  size = 'medium',
  onOverlayClick = () => undefined,
  overlayClassName,
  overlayColor,
  closeModal,
  ...toplayerRestProps
}: PropsType) {
  const handleOverlayClick = decorateOverlayClick(onOverlayClick);

  return (
    <Overlay
      onClick={handleOverlayClick}
      className={overlayClassName}
      color={overlayColor || 'blue'}
    >
      <TopLayer
        {...toplayerRestProps}
        {...(size === 'fluid' ? null : {size})}
        modal
        role="dialog"
        onClose={closeModal}
      >
        {children}
      </TopLayer>
    </Overlay>
  );
}
