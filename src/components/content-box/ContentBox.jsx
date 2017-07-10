import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TYPE = {
  HEADER: 'header',
  TITLE: 'title',
  CONTENT: 'content',
  ACTIONS: 'actions'
};

const ContentBox = ({items, isSpaced, full}) => {
  const contentBoxClass = classNames('sg-content-box', {
    'sg-content-box--spaced': isSpaced,
    'sg-content-box--full': full
  });

  return <div className={contentBoxClass}>
    {items}
  </div>;
};

ContentBox.propTypes = {
  items: PropTypes.node,
  isSpaced: PropTypes.bool,
  full: PropTypes.bool
};

export default ContentBox;
