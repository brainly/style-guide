import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Star from './Star';
import RateCounter from './RateCounter';

const ICO_SIZE = {
  SMALL: 14,
  NORMAL: 16
};

class Rating extends Component {
  onClick(index) {
    const {onChange = () => undefined, rate, active} = this.props;

    if (!active) {
      return;
    }
    const ratedStarIndex = rate - 1;

    if (ratedStarIndex !== index) {
      onChange(rate);
    }
  }

  render() {
    const {metricSize = 5, rate = 0, small, active, counter} = this.props;
    const ratingClass = classNames('sg-rate-box', {
      'sg-rate-box--small': small,
      'sg-rate-box--active': active
    });
    const starsProps = new Array(metricSize).fill(true).map((dump, index) => ({
      key: index,
      checked: index < rate,
      size: small ? ICO_SIZE.SMALL : ICO_SIZE.NORMAL,
      onClick: () => this.onClick(index)
    }));

    return <div className={ratingClass}>
      {starsProps.map(props => <Star {...props}/>)}
      <RateCounter counter={counter}/>
    </div>;
  }
}

Rating.propTypes = {
  small: PropTypes.bool,
  rate: PropTypes.number,
  metricSize: PropTypes.number,
  active: PropTypes.bool,
  onChange: PropTypes.func,
  counter: PropTypes.number
};

export default Rating;
