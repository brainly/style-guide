import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ALIGNED_SPACE, SPACE_SIZE, ALIGNMENT} from './ContentBoxConstants';

const ContentBoxActions = ({children, alignedSpace, spaceSize = SPACE_SIZE.NORMAL,
  align = ALIGNMENT.LEFT
}) => {

  const contentBoxClass = classNames('sg-content-box__actions', {
    'sg-content-box__actions--with-centered-elements': align === ALIGNMENT.CENTER,
    'sg-content-box__actions--with-elements-to-right': align === ALIGNMENT.RIGHT,
    [`sg-content-box__actions--spaced-${alignedSpace}`]: alignedSpace && spaceSize === SPACE_SIZE.NORMAL,
    [`sg-content-box__actions--spaced-${alignedSpace}-${spaceSize}`]: alignedSpace && spaceSize !== SPACE_SIZE.NORMAL
  });

  return <div className={contentBoxClass}>
    {children}
  </div>;
};

ContentBoxActions.propTypes = {
  children: PropTypes.node,
  full: PropTypes.bool,
  align: PropTypes.oneOf(Object.values(ALIGNMENT)),
  alignedSpace: PropTypes.oneOf(Object.values(ALIGNED_SPACE)),
  spaceSize: PropTypes.oneOf(Object.values(SPACE_SIZE))
};

export default ContentBoxActions;
export {ALIGNED_SPACE, SPACE_SIZE, ALIGNMENT};
