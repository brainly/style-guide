// @flow strict

import * as React from 'react';

export type RateCounterItemPropsType = {text?: string, ...};

const RateCounterItem = ({text}: RateCounterItemPropsType) => (
  <>
    <div className="sg-rate-box__counter-item-static">{text}</div>
    <div className="sg-rate-box__counter-item-dynamic">{text}</div>
  </>
);

export default RateCounterItem;
