// @flow

import React, {Component} from 'react';
import classnames from 'classnames';
import Star from './subcomponents/Star';
import RateCounter from './subcomponents/RateCounter';

type RatingSizeType =
  | 16
  | 24;

export const RATING_SIZE = {
  NORMAL: 16,
  LARGE: 24
};

const generateArrayRange = function(range: number): Array<number> {
  const array = Array(range);

  for (let i = 0; i < range; i++) {
    array[i] = i;
  }

  return array;
};

type OnMouseEnterType = (index: number, event: SyntheticMouseEvent<HTMLSpanElement>) => mixed;

type PropsType = {
  size?: RatingSizeType,
  rate: number,
  metricSize: number,
  active?: boolean,
  onChange: Function,
  onStarMouseEnter: OnMouseEnterType,
  onMouseLeave: () => mixed,
  counterText?: string,
  activeText?: string,
  noLabel?: boolean,
  className?: string
};

class Rating extends Component<PropsType> {
  static defaultProps = {
    onChange: () => undefined,
    onStarMouseEnter: () => undefined,
    onMouseLeave: () => undefined,
    metricSize: 5,
    rate: 0
  };

  constructor(props: PropsType) {
    super(props);

    this.createStarsOnClickFunctions(this.props.metricSize);
    this.createStarsMouseEnterFunctions(this.props.metricSize);
  }

  starsOnClickFunctions: Array<() => mixed> = [];
  starsMouseEnterFunctions: Array<SyntheticMouseEvent<HTMLSpanElement> => mixed> = [];

  componentWillReciveProps(nextProps: PropsType) {
    if (this.props.metricSize !== nextProps.metricSize) {
      this.createStarsOnClickFunctions(nextProps.metricSize);
      this.createStarsMouseEnterFunctions(this.props.metricSize);
    }
  }

  createStarsOnClickFunctions(metricSize: number) {
    this.starsOnClickFunctions = generateArrayRange(metricSize).map(rangeIndex => () => this.onClick(rangeIndex));
  }

  createStarsMouseEnterFunctions(metricSize: number) {
    this.starsMouseEnterFunctions = generateArrayRange(metricSize).map(rangeIndex =>
      event => this.onStarMouseEnter(rangeIndex, event)
    );
  }

  onClick = (index: number) => {
    const {onChange, active} = this.props;

    if (!active) {
      return;
    }
    const ratedStarIndex = index + 1;

    onChange(ratedStarIndex);
  };

  onStarMouseEnter = (index: number, event: SyntheticMouseEvent<HTMLSpanElement>) => {
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
      active, className, counterText, activeText, noLabel} = this.props;
    const ratingClass = classnames('sg-rate-box', {
      'sg-rate-box--large': size === RATING_SIZE.LARGE,
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
        {!noLabel &&
          <div className="sg-rate-box__rate">
            {rateString}
          </div>}
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

export default Rating;
