import React from 'react';
import PropTypes from 'prop-types';

const RateCounter = ({counter}) => {
  if (counter === undefined) {
    return null;
  }

  return <div className="sg-rate-box__counter">{counter}</div>;
};

RateCounter.propTypes = {
  counter: PropTypes.number
};

export default RateCounter;
