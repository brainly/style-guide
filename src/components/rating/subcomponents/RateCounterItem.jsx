import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const RateCounterItem = ({text, hidden = false}) => {
  const dynamicItemClassName = classnames('sg-rate-box__counter-item-dynamic', {
    'sg-rate-box__counter-item-dynamic--hidden': hidden
  });

  return (
    <Fragment>
      <div className="sg-rate-box__counter-item-static">
        {text}
      </div>
      <div className={dynamicItemClassName}>
        {text}
      </div>
    </Fragment>
  );
};

RateCounterItem.propTypes = {
  text: PropTypes.string,
  hidden: PropTypes.bool
};

export default RateCounterItem;
