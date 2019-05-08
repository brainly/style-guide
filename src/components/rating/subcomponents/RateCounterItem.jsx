// @flow strict
import React, {Fragment} from 'react';

type PropsType = {
  text?: string
};

const RateCounterItem = ({text}: PropsType) => (
  <Fragment>
    <div className="sg-rate-box__counter-item-static">
      {text}
    </div>
    <div className="sg-rate-box__counter-item-dynamic">
      {text}
    </div>
  </Fragment>
);

export default RateCounterItem;
