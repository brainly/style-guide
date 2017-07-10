import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {SIZE, ALIGNMENT} from './ContentBoxConstants';

const ContentBoxContent = ({
  children, full, spacedTop, spacedBottom, align = ALIGNMENT.LEFT
}) => {

  const contentBoxClass = classNames('sg-content-box__content', {
    'sg-content-box__content--full': full,
    'sg-content-box__content--with-centered-text': align === ALIGNMENT.CENTER,
    'sg-content-box__content--spaced-top': spacedTop === SIZE.NORMAL,
    [`sg-content-box__content--spaced-top-${spacedTop}`]: spacedTop !== SIZE.NORMAL,
    'sg-content-box__content--spaced-bottom': spacedBottom === SIZE.NORMAL,
    [`sg-content-box__content--spaced-bottom-${spacedBottom}`]: spacedBottom !== SIZE.NORMAL
  });

  return <div className={contentBoxClass}>
    {children}
  </div>;
};

ContentBoxContent.propTypes = {
  children: PropTypes.node,
  full: PropTypes.bool,
  align: PropTypes.oneOf(Object.values(ALIGNMENT)),
  spacedTop: PropTypes.oneOf(Object.values(SIZE)),
  spacedBottom: PropTypes.oneOf(Object.values(SIZE))
};

export default ContentBoxContent;
export {SIZE, ALIGNMENT};
