import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {HEADLINE_COLOR, HEADLINE_SIZE, HEADLINE_TYPE, HEADLINE_TRANSFORM, HEADLINE_ALIGN} from './headlineConsts';

export {HEADLINE_TYPE, HEADLINE_SIZE, HEADLINE_COLOR, HEADLINE_TRANSFORM, HEADLINE_ALIGN} from './headlineConsts';

const Headline = ({
  children,
  type = HEADLINE_TYPE.H1,
  size = HEADLINE_SIZE.NORMAL,
  extraBold,
  transform,
  align,
  color,
  className,
  ...props
}) => {
  const Type = type;
  const headlineClass = classNames('sg-headline', {
    [`sg-headline--${size}`]: size !== HEADLINE_SIZE.NORMAL,
    [`sg-headline--${color}`]: color,
    [`sg-headline--${transform}`]: transform,
    [`sg-headline--${align || ''}`]: align,
    'sg-headline--extra-bold': extraBold
  }, className);

  return (
    <Type {...props} className={headlineClass}>
      {children}
    </Type>
  );
};

Headline.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(Object.values(HEADLINE_TYPE)),
  size: PropTypes.oneOf(Object.values(HEADLINE_SIZE)),
  transform: PropTypes.oneOf(Object.values(HEADLINE_TRANSFORM)),
  align: PropTypes.oneOf(Object.values(HEADLINE_ALIGN)),
  extraBold: PropTypes.bool,
  color: PropTypes.oneOf(Object.values(HEADLINE_COLOR)),
  className: PropTypes.string
};

export default Headline;
