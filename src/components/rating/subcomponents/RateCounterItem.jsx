import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const RateCounterItem = ({text, hidden = false}) =>
  <Fragment>
    <div className={'sg-rate-box__counter-item-static'}>
      {text}
    </div>
    <div className={`sg-rate-box__counter-item-dynamic ${hidden ? 'sg-rate-box__counter-item-dynamic--hidden' : ''}`}>
      {text}
    </div>
  </Fragment>
;

RateCounterItem.propTypes = {
  text: PropTypes.string,
  hidden: PropTypes.bool
};

export default RateCounterItem;
