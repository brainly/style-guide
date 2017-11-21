import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {SIZE} from './ContentBoxConstants';

const ContentBox = ({children, spacedTop, spacedBottom, spaced, full, className, ...props}) => {
  const contentBoxClass = classNames('sg-content-box', {
    'sg-content-box--spaced': spaced,
    'sg-content-box--full': full,
    'sg-content-box--spaced-top': spacedTop === SIZE.NORMAL,
    [`sg-content-box--spaced-top-${spacedTop}`]: spacedTop && spacedTop !== SIZE.NORMAL,
    'sg-content-box--spaced-bottom': spacedBottom === SIZE.NORMAL,
    [`sg-content-box--spaced-bottom-${spacedBottom}`]: spacedBottom && spacedBottom !== SIZE.NORMAL
  }, className);

  return (
    <div {...props} className={contentBoxClass}>
      {children}
    </div>
  );
};

ContentBox.propTypes = {
  children: PropTypes.node,
  spaced: PropTypes.bool,
  full: PropTypes.bool,
  className: PropTypes.string,
  spacedTop: PropTypes.oneOf(Object.values(SIZE)),
  spacedBottom: PropTypes.oneOf(Object.values(SIZE))
};

export default ContentBox;
export const CONTENT_BOX_SPACING_SIZE = SIZE;
