import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon, {TYPE, COLOR} from '../icons/Icon';

const ICO_SIZE = {
  SMALL: 14,
  NORMAL: 16
};

const Star = ({size, checked, onClick}) => {
  const starClass = classnames('sg-rate-box__star', {
    'sg-rate-box__star--checked': checked
  });

  return <span className={starClass} onClick={onClick}>
    <Icon type={TYPE.STAR} size={size} color={COLOR.ADAPTIVE}/>
  </span>;
};

Star.propTypes = {
  size: PropTypes.number,
  checked: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

const RateCounter = ({counter}) => {
  if (counter === undefined) {
    return null;
  }

  return <div className="sg-rate-box__counter">{counter}</div>;
};

RateCounter.propTypes = {
  counter: PropTypes.number
};

class Rating extends Component {
  onClick(index) {
    const {onChange = () => undefined, rate, active} = this.props;

    if (!active) {
      return;
    }
    const ratedStarIndex = index + 1;

    if (ratedStarIndex !== rate) {
      onChange(ratedStarIndex);
    }
  }

  render() {
    const {metricSize = 5, rate = 0, small, active, counter, className} = this.props;
    const ratingClass = classnames('sg-rate-box', {
      'sg-rate-box--small': small,
      'sg-rate-box--active': active
    }, className);
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
  counter: PropTypes.number,
  className: PropTypes.string
};

export default Rating;
export {Star};
