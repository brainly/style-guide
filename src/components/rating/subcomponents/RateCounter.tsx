import * as React from 'react';
import RateCounterItem from './RateCounterItem';
export type RateCounterPropsType = {
  counterText?: string;
  activeText?: string;
} & Omit<React.AllHTMLAttributes<HTMLElement>, 'counterText' | 'activeText'>;

const RateCounter = ({activeText, counterText}: RateCounterPropsType) => (
  <div className="sg-rate-box__counter">
    <RateCounterItem text={counterText} />
    <RateCounterItem text={activeText} />
  </div>
);

export default RateCounter;
