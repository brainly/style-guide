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

const ContentBoxHeader = ({content, isSpaced, space, spaceSize = SPACE_SIZE.NORMAL,
  align = ALIGNMENT.LEFT
}) => {

  const contentBoxClass = classNames('sg-content-box__header', {
    'sg-content-box__header--with-centered-elements': align === ALIGNMENT.CENTER,
    'sg-content-box__header--spaced': isSpaced,
    [`sg-content-box__header--spaced-${space}`]: space && spaceSize === SPACE_SIZE.NORMAL,
    [`sg-content-box__header--spaced-${space}-${spaceSize}`]: space && spaceSize !== SPACE_SIZE.NORMAL
  });

  return <div className={contentBoxClass}>
    {content}
  </div>;
};

ContentBoxHeader.propTypes = {
  content: PropTypes.node,
  full: PropTypes.bool,
  isSpaced: PropTypes.bool,
  align: PropTypes.oneOf(Object.values(ALIGNMENT)),
  space: PropTypes.oneOf(Object.values(SPACE)),
  spaceSize: PropTypes.oneOf(Object.values(SPACE_SIZE))
};

export default ContentBoxHeader;
export {SPACE, SPACE_SIZE, ALIGNMENT};
