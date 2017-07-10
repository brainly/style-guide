import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ALIGNED_SPACE, SPACE_SIZE, ALIGNMENT} from './ContentBoxConstants';

const ContentBoxHeader = ({children, spaced, alignedSpace, spaceSize = SPACE_SIZE.NORMAL,
  align = ALIGNMENT.LEFT
}) => {

  const contentBoxClass = classNames('sg-content-box__header', {
    'sg-content-box__header--with-centered-elements': align === ALIGNMENT.CENTER,
    'sg-content-box__header--spaced': spaced,
    [`sg-content-box__header--spaced-${alignedSpace}`]: alignedSpace && spaceSize === SPACE_SIZE.NORMAL,
    [`sg-content-box__header--spaced-${alignedSpace}-${spaceSize}`]: alignedSpace && spaceSize !== SPACE_SIZE.NORMAL
  });

  return <div className={contentBoxClass}>
    {children}
  </div>;
};

ContentBoxHeader.propTypes = {
  children: PropTypes.node,
  full: PropTypes.bool,
  spaced: PropTypes.bool,
  align: PropTypes.oneOf(Object.values(ALIGNMENT)),
  alignedSpace: PropTypes.oneOf(Object.values(ALIGNED_SPACE)),
  spaceSize: PropTypes.oneOf(Object.values(SPACE_SIZE))
};

export default ContentBoxHeader;
export {ALIGNED_SPACE, SPACE_SIZE, ALIGNMENT};
