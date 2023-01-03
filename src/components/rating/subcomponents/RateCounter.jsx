// @flow strict

import * as React from 'react';
import RateCounterItem from './RateCounterItem';

export type RateCounterPropsType = $ReadOnly<{
  counterText: string,
}>;

const RateCounter = ({counterText}: RateCounterPropsType) => (
  <div className="sg-rate-box__counter">
    <RateCounterItem text={counterText} />
  </div>
);

export default RateCounter;
