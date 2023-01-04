// @flow strict

import * as React from 'react';

export type RateCounterPropsType = $ReadOnly<{
  counterText: string,
}>;

const RateCounter = ({counterText}: RateCounterPropsType) => (
  <div className="sg-rate-box__counter">{counterText}</div>
);

export default RateCounter;
