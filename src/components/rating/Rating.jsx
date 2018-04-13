import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Star from './subcomponents/Star';
import RateCounter from './subcomponents/RateCounter';

export const RATING_SIZE = {
  SMALL: 14,
  NORMAL: 16,
  LARGE: 24
};

const generateArrayRange = function(range) {
  const array = Array(range);

  for (let i = 0; i < range; i++) {
    array[i] = i;
  }

  return array;
};

class Rating extends Component {
  static defaultProps = {
    onChange: () => undefined,
    onStarMouseEnter: () => undefined,
    onMouseLeave: () => undefined,
    metricSize: 5,
    rate: 0
  };

  constructor(props) {
    super(props);

    this.createStarsOnClickFunctions(this.props.metricSize);
    this.createStarsMouseEnterFunctions(this.props.metricSize);
  }

  starsOnClickFunctions = null;
  starsOnIconMouseEnterFunctions = null;

  componentWillReciveProps(nextProps) {
    if (this.props.metricSize !== nextProps.metricSize) {
      this.createStarsOnClickFunctions(nextProps.metricSize);
      this.createStarsMouseEnterFunctions(this.props.metricSize);
    }
  }

  createStarsOnClickFunctions(metricSize) {
    this.starsOnClickFunctions = generateArrayRange(metricSize).map(rangeIndex => () => this.onClick(rangeIndex));
  }

  createStarsMouseEnterFunctions(metricSize) {
    this.starsMouseEnterFunctions = generateArrayRange(metricSize).map(rangeIndex =>
      event => this.onStarMouseEnter(rangeIndex, event)
    );
  }

  onClick = index => {
    const {onChange, active} = this.props;

    if (!active) {
      return;
    }
    const ratedStarIndex = index + 1;

    onChange(ratedStarIndex);
  };

  onStarMouseEnter = (index, event) => {
    const {onStarMouseEnter, active} = this.props;

    if (!active) {
      return;
    }

    onStarMouseEnter(index + 1, event);
  };

  onMouseLeave = () => {
    this.props.onMouseLeave();
  };

  render() {
    const {metricSize, rate, size = RATING_SIZE.NORMAL,
      active, toBottom, className, counterText, activeText} = this.props;
    const ratingClass = classnames('sg-rate-box', {
      'sg-rate-box--large': size === RATING_SIZE.LARGE,
      'sg-rate-box--small': size === RATING_SIZE.SMALL,
      'sg-rate-box--to-bottom': toBottom,
      'sg-rate-box--active': active
    }, className);

    const starsProps = generateArrayRange(metricSize).map(rangeIndex => ({
      key: rangeIndex,
      size,
      onClick: this.starsOnClickFunctions[rangeIndex]
    }));

    const rateString = rate.toLocaleString(undefined, {minimumFractionDigits: 1, maximumFractionDigits: 1});

    return (
      <div className={ratingClass}>
        <div className="sg-rate-box__rate">
          {rateString}
        </div>
        <div className="sg-rate-box__stars-container" onMouseLeave={this.onMouseLeave}>
          <div className="sg-rate-box__filled-stars" style={{width: `${100 * rate / metricSize}%`}}>
            {starsProps.map(props => <Star key={props.key} {...props} />)}
          </div>
          <div className="sg-rate-box__background-stars">
            {starsProps.map(props =>
              <Star key={props.key} onMouseEnter={this.starsMouseEnterFunctions[props.key]} {...props} />)}
          </div>
        </div>
        <RateCounter
          activeText={activeText}
          counterText={counterText}
        />
      </div>
    );
  }
}

Rating.propTypes = {
  size: PropTypes.number,
  rate: PropTypes.number,
  metricSize: PropTypes.number,
  active: PropTypes.bool,
  toBottom: PropTypes.bool,
  onChange: PropTypes.func,
  onStarMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  counterText: PropTypes.string,
  activeText: PropTypes.string,
  className: PropTypes.string
};

export default Rating;
