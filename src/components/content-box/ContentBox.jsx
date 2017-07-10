import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ContentBox = ({children, spaced, full}) => {
  const contentBoxClass = classNames('sg-content-box', {
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
  full: PropTypes.bool
};

export default ContentBox;
