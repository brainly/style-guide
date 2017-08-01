import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {SIZE, ALIGNMENT} from './ContentBoxConstants';

const ContentBoxActions = ({children, spacedTop, spacedBottom, className,
  align = ALIGNMENT.LEFT
}) => {

  const contentBoxClass = classNames('sg-content-box__actions', className, {
    'sg-content-box__actions--with-centered-elements': align === ALIGNMENT.CENTER,
    'sg-content-box__actions--with-elements-to-right': align === ALIGNMENT.RIGHT,
    'sg-content-box__actions--spaced-top': spacedTop === SIZE.NORMAL,
    [`sg-content-box__actions--spaced-top-${spacedTop}`]: spacedTop && spacedTop !== SIZE.NORMAL,
    'sg-content-box__actions--spaced-bottom': spacedBottom === SIZE.NORMAL,
    [`sg-content-box__actions--spaced-bottom-${spacedBottom}`]: spacedBottom && spacedBottom !== SIZE.NORMAL
  }, className);

  return <div className={contentBoxClass}>
    {children}
  </div>;
};

ContentBoxActions.propTypes = {
  children: PropTypes.node,
  full: PropTypes.bool,
  align: PropTypes.oneOf(Object.values(ALIGNMENT)),
  spacedTop: PropTypes.oneOf(Object.values(SIZE)),
  spacedBottom: PropTypes.oneOf(Object.values(SIZE)),
  className: PropTypes.string
};

export default ContentBoxActions;
export {SIZE, ALIGNMENT};
