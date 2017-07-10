import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SPACE = {
  TOP: 'top',
  BOTTOM: 'bottom'
};

const SPACE_SIZE = {
  XXSMALL: 'xxsmall',
  XSMALL: 'xsmall',
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large',
  XLARGE: 'xlarge',
  XXLARGE: 'xxlarge'
};

const ALIGNMENT = {
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right'
};

const ContentBoxContent = ({
  children, full, space, spaceSize = SPACE_SIZE.NORMAL,
  align = ALIGNMENT.LEFT
}) => {

  const contentBoxClass = classNames('sg-content-box__content', {
    'sg-content-box__content--full': full,
    'sg-content-box__content--with-centered-text': align === ALIGNMENT.CENTER,
    [`sg-content-box__content--spaced-${space}`]: space && spaceSize === SPACE_SIZE.NORMAL,
    [`sg-content-box__content--spaced-${space}-${spaceSize}`]: space && spaceSize !== SPACE_SIZE.NORMAL
  });

  return <div className={contentBoxClass}>
    {children}
  </div>;
};

ContentBoxContent.propTypes = {
  children: PropTypes.node,
  full: PropTypes.bool,
  align: PropTypes.oneOf(Object.values(ALIGNMENT)),
  space: PropTypes.oneOf(Object.values(SPACE)),
  spaceSize: PropTypes.oneOf(Object.values(SPACE_SIZE))
};

export default ContentBoxContent;
export {SPACE, SPACE_SIZE, ALIGNMENT};
