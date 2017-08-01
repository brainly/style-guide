import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ContentBox = ({children, spaced, full, className}) => {
  const contentBoxClass = classNames('sg-content-box', className, {
    'sg-content-box--spaced': spaced,
    'sg-content-box--full': full
  });

  return <div className={contentBoxClass}>
    {children}
  </div>;
};

ContentBox.propTypes = {
  children: PropTypes.node,
  spaced: PropTypes.bool,
  full: PropTypes.bool,
  className: PropTypes.string
};

export default ContentBox;
