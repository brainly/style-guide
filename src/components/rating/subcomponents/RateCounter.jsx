// @flow strict

import React from 'react';
import RateCounterItem from './RateCounterItem';

type PropsType = {
  counterText?: string,
  activeText?: string,
};

const RateCounter = ({activeText, counterText}: PropsType) => (
  <div className="sg-rate-box__counter">
    <RateCounterItem text={counterText} />
    <RateCounterItem text={activeText} />
  </div>
);

export default RateCounter;
