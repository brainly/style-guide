import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const RateCounterItem = ({text}) => (
  <Fragment>
    <div className="sg-rate-box__counter-item-static">
      {text}
    </div>
    <div className="sg-rate-box__counter-item-dynamic">
      {text}
    </div>
  </Fragment>
);

RateCounterItem.propTypes = {
  text: PropTypes.string
};

export default RateCounterItem;
