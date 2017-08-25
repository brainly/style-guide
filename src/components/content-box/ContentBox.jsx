import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ContentBox = ({children, spaced, full, className, ...props}) => {
  const contentBoxClass = classNames('sg-content-box', {
    'sg-content-box--spaced': spaced,
    'sg-content-box--full': full
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
  className: PropTypes.string
};

export default ContentBox;
