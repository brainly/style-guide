import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {SIZE, ALIGNMENT} from './ContentBoxConstants';

const ContentBoxTitle = ({
  children, spaced, spacedTop, spacedBottom, align = ALIGNMENT.LEFT
}) => {

  const contentBoxClass = classNames('sg-content-box__title', {
    'sg-content-box__title--with-centered-elements': align === ALIGNMENT.CENTER,
    'sg-content-box__title--spaced': spaced,
    'sg-content-box__title--spaced-top': spacedTop === SIZE.NORMAL,
    [`sg-content-box__title--spaced-top-${spacedTop}`]: spacedTop !== SIZE.NORMAL,
    'sg-content-box__title--spaced-bottom': spacedBottom === SIZE.NORMAL,
    [`sg-content-box__title--spaced-bottom-${spacedBottom}`]: spacedBottom !== SIZE.NORMAL
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
  spacedTop: PropTypes.oneOf(Object.values(SIZE)),
  spacedBottom: PropTypes.oneOf(Object.values(SIZE))
};

export default ContentBoxTitle;
export {SIZE, ALIGNMENT};
