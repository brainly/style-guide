// @flow strict

import * as React from 'react';
import cx from 'classnames';
import {__DEV__, invariant} from '../utils';

export type DialogPropsType = $ReadOnly<{
  children: React.Node,
  size?: 's' | 'm' | 'l' | 'xl',
  /**
   * Specify the dialog scrolling behavior when
   * the content is longer than the viewport.
   *
   * - `inside` - height is equal to the viewport and the dialog scrolls
   * - `outside` - height is equal to the content and the overlay scrolls
   */
  scroll?: 'inside' | 'outside',
  /**
   * Specify the modal behavior of a dialog.
   *
   * ```
   * | feature                         | 'none' | 'events-only' | 'events-and-close-button' |
   * |---------------------------------|--------|---------------|---------------------------|
   * | renders default close button    |   -    |       -       |             X             |
   * | click on button fires `onClose` |   -    |       -       |             X             |
   * | click on overlay fires `onClose`|   -    |       X       |             X             |
   * | escape keyup fires `onClose`    |   -    |       X       |             X             |
   * ```
   */
  modal?: 'events-only' | 'events-and-close-button' | 'none',
  /**
   * Both mobile and desktop views are in fullscreen mode.
   */
  fullscreen?: boolean,
  noPadding?: boolean,
  // noCloseEvents?: boolean,
  // noCloseButton?: boolean,

  // padding?: 'm' | 'none',
  // closeEvents?: 'all' | 'none',
  // closeButton?: 'default' | 'custom',
  onClose?: () => void,
}>;

const Dialog = (props: DialogPropsType, ref) => {
  const {
    children,
    size = 'm',
    scroll = 'outside',
    modal = 'events-and-close-button',
    fullscreen = false,
    noPadding = false,
    onClose,
  } = props;

  if (__DEV__) {
    invariant(
      !(modal && !onClose),
      'modal prop requires onClose callback to be defined'
    );

    invariant(
      !(onClose && !modal),
      'onClose callback requires modal prop to be defined'
    );
  }

  const overlayClass = cx('sg-dialog__overlay', {
    'sg-dialog__overlay--scroll': scroll === 'outside',
  });

  const containerClass = cx(
    'sg-dialog__container',
    `sg-dialog__container--size-${size}`,
    {
      'sg-dialog__container--scroll': scroll === 'outside',
      'sg-dialog__container--no-padding': noPadding,
      'sg-dialog__container--fullscreen': fullscreen,
    }
  );

  return (
    <div className={overlayClass}>
      <div ref={ref} className={containerClass}>
        {children}
      </div>
    </div>
  );
};

export default React.forwardRef<DialogPropsType, HTMLElement>(Dialog);
