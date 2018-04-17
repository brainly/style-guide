import React from 'react';
import PropTypes from 'prop-types';
import RateCounterItem from './RateCounterItem';

const RateCounter = ({activeText, counterText}) => (
  <div className="sg-rate-box__counter">
    <RateCounterItem text={counterText} />
    <RateCounterItem text={activeText} />
  </div>
);

RateCounter.propTypes = {
  counterText: PropTypes.string,
  activeText: PropTypes.string
};

export default RateCounter;
