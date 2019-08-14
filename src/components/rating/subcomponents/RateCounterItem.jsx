// @flow strict

import React from 'react';

type PropsType = {text?: string, ...};

const RateCounterItem = ({text}: PropsType) => (
  <>
    <div className="sg-rate-box__counter-item-static">{text}</div>
    <div className="sg-rate-box__counter-item-dynamic">{text}</div>
  </>
);

export default RateCounterItem;
