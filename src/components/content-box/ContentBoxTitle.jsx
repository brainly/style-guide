import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ALIGNED_SPACE, SPACE_SIZE, ALIGNMENT} from './ContentBoxConstants';

const ContentBoxTitle = ({children, spaced, alignedSpace, spaceSize = SPACE_SIZE.NORMAL,
  align = ALIGNMENT.LEFT
}) => {

  const contentBoxClass = classNames('sg-content-box__title', {
    'sg-content-box__title--with-centered-elements': align === ALIGNMENT.CENTER,
    'sg-content-box__title--spaced': spaced,
    [`sg-content-box__title--spaced-${alignedSpace}`]: alignedSpace && spaceSize === SPACE_SIZE.NORMAL,
    [`sg-content-box__title--spaced-${alignedSpace}-${spaceSize}`]: alignedSpace && spaceSize !== SPACE_SIZE.NORMAL
  });

  return <div className={contentBoxClass}>
    {children}
  </div>;
};

ContentBoxTitle.propTypes = {
  children: PropTypes.node,
  full: PropTypes.bool,
  spaced: PropTypes.bool,
  align: PropTypes.oneOf(Object.values(ALIGNMENT)),
  alignedSpace: PropTypes.oneOf(Object.values(ALIGNED_SPACE)),
  spaceSize: PropTypes.oneOf(Object.values(SPACE_SIZE))
};

export default ContentBoxTitle;
export {ALIGNED_SPACE, SPACE_SIZE, ALIGNMENT};
