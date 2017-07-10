import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ALIGNED_SPACE, SPACE_SIZE, ALIGNMENT} from './ContentBoxConstants';

const ContentBoxContent = ({
  children, full, alignedSpace, spaceSize = SPACE_SIZE.NORMAL,
  align = ALIGNMENT.LEFT
}) => {

  const contentBoxClass = classNames('sg-content-box__content', {
    'sg-content-box__content--full': full,
    'sg-content-box__content--with-centered-text': align === ALIGNMENT.CENTER,
    [`sg-content-box__content--spaced-${alignedSpace}`]: alignedSpace && spaceSize === SPACE_SIZE.NORMAL,
    [`sg-content-box__content--spaced-${alignedSpace}-${spaceSize}`]: alignedSpace && spaceSize !== SPACE_SIZE.NORMAL
  });

  return <div className={contentBoxClass}>
    {children}
  </div>;
};

ContentBoxContent.propTypes = {
  children: PropTypes.node,
  full: PropTypes.bool,
  align: PropTypes.oneOf(Object.values(ALIGNMENT)),
  alignedSpace: PropTypes.oneOf(Object.values(ALIGNED_SPACE)),
  spaceSize: PropTypes.oneOf(Object.values(SPACE_SIZE))
};

export default ContentBoxContent;
export {ALIGNED_SPACE, SPACE_SIZE, ALIGNMENT};
