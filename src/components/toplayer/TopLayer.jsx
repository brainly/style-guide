import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon, {TYPE as iconTypes, ICON_COLOR} from '../icons/Icon';

export const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

const TopLayer = props => {
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
    [`sg-toplayer--${size}`]: size
  }, className);

  const toplayerWrapperClassName = classnames('sg-toplayer__wrapper', {
    'sg-toplayer__wrapper--no-padding': noPadding
  });

  return (
    <div {...additionalProps} className={topLayerClassName}>
      {onClose ?
        <div className="sg-toplayer__close" onClick={onClose}>
          <Icon type={iconTypes.X} color={ICON_COLOR.GRAY_SECONDARY} size={14} />
        </div> : null
      }
      <div className={toplayerWrapperClassName}>
        {children}
      </div>
    </div>
  );
};

TopLayer.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  lead: PropTypes.bool,
  fill: PropTypes.bool,
  modal: PropTypes.bool,
  withBugbox: PropTypes.bool,
  smallSpaced: PropTypes.bool,
  splashScreen: PropTypes.bool,
  limitedWidth: PropTypes.bool,
  row: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(SIZE)),
  transparent: PropTypes.bool,
  noPadding: PropTypes.bool,
  className: PropTypes.string
};

export default TopLayer;
