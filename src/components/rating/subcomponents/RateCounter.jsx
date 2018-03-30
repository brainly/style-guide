import React from 'react';
import PropTypes from 'prop-types';
import RateCounterItem from './RateCounterItem';

const RateCounter = ({activeText, counterText, showActiveText}) => (
  <div className="sg-rate-box__counter">
    <RateCounterItem text={counterText} hidden={showActiveText} />
    <RateCounterItem text={activeText} hidden={!showActiveText} />
  </div>
);

RateCounter.propTypes = {
  counterText: PropTypes.string,
  activeText: PropTypes.string,
  showActiveText: PropTypes.bool
};

export default RateCounter;
