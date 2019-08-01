// @flow strict
import React from 'react';
import type {Node} from 'react';
import classnames from 'classnames';
import Icon from '../icons/Icon';

export type TopLayerSizeType =
  | 'small'
  | 'medium'
  | 'large';

export const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

export type PropsType = {
  children: Node,
  onClose?: SyntheticMouseEvent<HTMLDivElement> => mixed,
  lead?: boolean,
  fill?: boolean,
  modal?: boolean,
  withBugbox?: boolean,
  smallSpaced?: boolean,
  splashScreen?: boolean,
  limitedWidth?: boolean,
  row?: boolean,
  size?: TopLayerSizeType,
  transparent?: boolean,
  noPadding?: boolean,
  className?: string
};

const TopLayer = (props: PropsType) => {
  const {
    children,
    onClose,
    size,
    lead,
    fill,
    modal,
    withBugbox,
    smallSpaced,
    splashScreen,
    limitedWidth,
    row,
    noPadding,
    transparent,
    className,
    ...additionalProps
  } = props;

  const topLayerClassName = classnames('sg-toplayer', {
    'sg-toplayer--lead': lead,
    'sg-toplayer--fill': fill,
    'sg-toplayer--modal': modal,
    'sg-toplayer--with-bugbox': withBugbox,
    'sg-toplayer--small-spaced': smallSpaced,
    'sg-toplayer--splash-screen': splashScreen,
    'sg-toplayer--limited-width': limitedWidth,
    'sg-toplayer--row': row,
    'sg-toplayer--transparent': transparent,
    [`sg-toplayer--${String(size)}`]: size
  }, className);

  const toplayerWrapperClassName = classnames('sg-toplayer__wrapper', {
    'sg-toplayer__wrapper--no-padding': noPadding
  });

  return (
    <div {...additionalProps} className={topLayerClassName}>
      {onClose ?
        <div className="sg-toplayer__close" onClick={onClose}>
          <Icon type="std-close" color="gray-secondary" size={24} />
        </div> : null
      }
      <div className={toplayerWrapperClassName}>
        {children}
      </div>
    </div>
  );
};

export default TopLayer;
