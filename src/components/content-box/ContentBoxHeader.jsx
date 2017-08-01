import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {SIZE, ALIGNMENT} from './ContentBoxConstants';

const ContentBoxHeader = ({children, spaced, spacedTop, spacedBottom, className,
  align = ALIGNMENT.LEFT
}) => {

  const contentBoxClass = classNames('sg-content-box__header', className, {
    'sg-content-box__header--with-centered-elements': align === ALIGNMENT.CENTER,
    'sg-content-box__header--spaced': spaced,
    'sg-content-box__header--spaced-top': spacedTop === SIZE.NORMAL,
    [`sg-content-box__header--spaced-top-${spacedTop}`]: spacedTop && spacedTop !== SIZE.NORMAL,
    'sg-content-box__header--spaced-bottom': spacedBottom === SIZE.NORMAL,
    [`sg-content-box__header--spaced-bottom-${spacedBottom}`]: spacedBottom && spacedBottom !== SIZE.NORMAL
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
  spacedTop: PropTypes.oneOf(Object.values(SIZE)),
  spacedBottom: PropTypes.oneOf(Object.values(SIZE)),
  className: PropTypes.string
};

export default ContentBoxHeader;
export {SIZE, ALIGNMENT};
