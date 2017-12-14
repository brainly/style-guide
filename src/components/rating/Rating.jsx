import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Star from './subcomponents/Star';
import RateCounter from './subcomponents/RateCounter';

const ICO_SIZE = {
  SMALL: 14,
  NORMAL: 16
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
    metricSize: 5,
    rate: 0
  };

  constructor(props) {
    super(props);
    this.createStarsOnClickFunctions(this.props.metricSize);
  }

  state = {
    hoveringStars: false
  };

  componentWillReciveProps(nextProps) {
    if (this.props.metricSize !== nextProps.metricSize) {
      this.createStarsOnClickFunctions(nextProps.metricSize);
    }
  }

  createStarsOnClickFunctions(metricSize) {
    this.starsOnClickFunctions = generateArrayRange(metricSize).map(rangeIndex => () => this.onClick(rangeIndex));
  }

  onClick = index => {
    const {onChange, rate, active} = this.props;

    if (!active) {
      return;
    }
    const ratedStarIndex = index + 1;

    if (ratedStarIndex !== rate) {
      onChange(ratedStarIndex);
    }
  };

  onMouseEnter = () => {
    if (!this.props.active) {
      return;
    }

    this.setState({hoveringStars: true});
  };

  onMouseLeave = () => {
    this.setState({hoveringStars: false});
  };

  render() {
    const {metricSize, rate, small, active, className, counterText, activeText} = this.props;
    const {hoveringStars} = this.state;
    const ratingClass = classnames('sg-rate-box', {
      'sg-rate-box--small': small,
      'sg-rate-box--active': active
    }, className);

    const starsProps = generateArrayRange(metricSize).map(rangeIndex => ({
      key: rangeIndex,
      size: small ? ICO_SIZE.SMALL : ICO_SIZE.NORMAL,
      onClick: this.starsOnClickFunctions[rangeIndex]
    }));

    const rateString = rate.toLocaleString(undefined, {minimumFractionDigits: 1, maximumFractionDigits: 1});

    return (
      <div className={ratingClass}>
        <div className="sg-rate-box__rate">
          {rateString}
        </div>
        <div className="sg-rate-box__stars_container" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
          <div className="sg-rate-box__filled_stars" style={{width: `${100 * rate / metricSize}%`}}>
            {starsProps.map(props => <Star key={props.key} {...props} />)}
          </div>
          <div className="sg-rate-box__background_stars">
            {starsProps.map(props => <Star key={props.key} {...props} />)}
          </div>
        </div>
        <RateCounter activeText={activeText} counterText={counterText}
          showActiveText={hoveringStars || active && rate === 0} />
      </div>
    );
  }
}

Rating.propTypes = {
  small: PropTypes.bool,
  rate: PropTypes.number,
  metricSize: PropTypes.number,
  active: PropTypes.bool,
  onChange: PropTypes.func,
  counterText: PropTypes.string,
  activeText: PropTypes.string,
  className: PropTypes.string
};

export default Rating;
