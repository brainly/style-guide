import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const HorizontalSeparator = ({spaced, short}) => {

  const separatorClass = classNames('sg-horizontal-separator', {
    'sg-horizontal-separator--spaced': spaced && !short,
    'sg-horizontal-separator--short-spaced': spaced && short
  });

  return <div className = {separatorClass}></div>;
};

HorizontalSeparator.propTypes = {
  spaced: PropTypes.bool,
  short: PropTypes.bool
};

export default HorizontalSeparator;
