import * as React from 'react';
export type RateCounterItemPropsType = {
  text?: string;
} & Omit<React.AllHTMLAttributes<HTMLElement>, 'text'>;

const RateCounterItem = ({text}: RateCounterItemPropsType) => (
  <>
    <div className="sg-rate-box__counter-item-static">{text}</div>
    <div className="sg-rate-box__counter-item-dynamic">{text}</div>
  </>
);

export default RateCounterItem;