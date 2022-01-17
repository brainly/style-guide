// @flow strict

import * as React from 'react';
import classnames from 'classnames';
import Star from './subcomponents/Star';
import RateCounter from './subcomponents/RateCounter';

type RatingSizeType = 's' | 'xs';

export const RATING_SIZE = {
  XS: 'xs',
  S: 's',
};

const generateArrayRange = function(range: number): Array<number> {
  const array = Array(range);

  for (let i = 0; i < range; i++) {
    array[i] = i;
  }

  return array;
};

function generateName() {
  return `rating${Math.random()
    .toString(36)
    .substring(7)}`;
}

type OnMouseEnterType = (
  index: number,
  event: SyntheticMouseEvent<HTMLSpanElement>
) => mixed;

export type RatingPropsType = {
  size?: RatingSizeType,
  rate: number,
  metricSize: number,
  active?: boolean,
  onChange: number => mixed,
  onStarMouseEnter: OnMouseEnterType,
  onMouseLeave: () => mixed,
  counterText?: string,
  activeText?: string,
  noLabel?: boolean,
  className?: string,
  ...
};

/* eslint-disable react/default-props-match-prop-types */
// legacy files without proper flow checks can suffer from this
class Rating extends React.Component<RatingPropsType> {
  static defaultProps = {
    onChange: () => undefined,
    onStarMouseEnter: () => undefined,
    onMouseLeave: () => undefined,
    metricSize: 5,
    rate: 0,
  };

  constructor(props: RatingPropsType) {
    super(props);

    this.createStarsOnChangeFunctions(this.props.metricSize);
    this.createStarsMouseEnterFunctions(this.props.metricSize);
    this.name = generateName();
  }

  starsOnChangeFunctions: Array<() => mixed> = [];
  starsMouseEnterFunctions: Array<
    (SyntheticMouseEvent<HTMLSpanElement>) => mixed
  > = [];

  componentWillReciveProps(nextProps: RatingPropsType) {
    if (this.props.metricSize !== nextProps.metricSize) {
      this.createStarsOnChangeFunctions(nextProps.metricSize);
      this.createStarsMouseEnterFunctions(this.props.metricSize);
    }
  }

  createStarsOnChangeFunctions(metricSize: number) {
    this.starsOnChangeFunctions = generateArrayRange(
      metricSize
    ).map(rangeIndex => () => this.onStarChange(rangeIndex));
  }

  createStarsMouseEnterFunctions(metricSize: number) {
    this.starsMouseEnterFunctions = generateArrayRange(
      metricSize
    ).map(rangeIndex => event => this.onStarMouseEnter(rangeIndex, event));
  }

  onStarChange = (index: number) => {
    const {onChange, active = false} = this.props;

    if (!active) {
      return;
    }
    const ratedStarIndex = index + 1;

    onChange(ratedStarIndex);
  };

  onStarMouseEnter = (
    index: number,
    event: SyntheticMouseEvent<HTMLSpanElement>
  ) => {
    const {onStarMouseEnter, active = false} = this.props;

    if (!active) {
      return;
    }

    onStarMouseEnter(index + 1, event);
  };

  onMouseLeave = () => {
    this.props.onMouseLeave();
  };

  render() {
    const {
      metricSize,
      rate,
      size = RATING_SIZE.XS,
      active,
      className,
      counterText,
      activeText,
      noLabel = false,
    } = this.props;
    const ratingClass = classnames(
      'sg-rate-box',
      {
        'sg-rate-box--s': size === RATING_SIZE.S,
        'sg-rate-box--active': active,
      },
      className
    );

    const starsProps = generateArrayRange(metricSize).map(rangeIndex => ({
      size: size === 's' ? 32 : 24,
      onChange: this.starsOnChangeFunctions[rangeIndex],
      active,
      name: this.name,
      label: `${rangeIndex + 1}/${metricSize}`,
      value: rangeIndex + 1,
    }));

    const rateString = rate.toLocaleString(undefined, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });

    const label = `${activeText}, min: 1, max: ${metricSize}`;
    const metricString = `${rate}/${metricSize}`;

    return (
      <div className={ratingClass}>
        <p className="sg-rate-box__rate">
          <span aria-hidden>{rateString}</span>
          <span className="sg-visually-hidden">{metricString}</span>
        </p>
        <div
          className="sg-rate-box__stars-container"
          onMouseLeave={this.onMouseLeave}
        >
          <div
            className="sg-rate-box__filled-stars"
            style={{width: `${(100 * rate) / metricSize}%`}}
            aria-hidden
          >
            {starsProps.map(props => (
              <Star key={props.value} size={props.size} />
            ))}
          </div>
          <div
            className="sg-rate-box__background-stars"
            role="radiogroup"
            aria-hidden={!active}
            aria-label={label}
          >
            {starsProps.map(props => (
              <Star
                key={props.value}
                onMouseEnter={this.starsMouseEnterFunctions[props.key]}
                {...props}
              />
            ))}
          </div>
        </div>
        <RateCounter activeText={activeText} counterText={counterText} />
      </div>
    );
  }
}

export default Rating;
