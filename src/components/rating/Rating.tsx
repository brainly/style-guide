import * as React from 'react';
import classnames from 'classnames';
import Star from './subcomponents/Star';
import RateCounter from './subcomponents/RateCounter';
import {__DEV__, invariant} from '../utils';

type RatingSizeType = 's' | 'xs';

export const RATING_SIZE = {
  XS: 'xs',
  S: 's',
} as const;

const generateArrayRange = function (range: number): Array<number> {
  const array = Array(range);

  for (let i = 0; i < range; i++) {
    array[i] = i;
  }

  return array;
};

function generateName() {
  return `rating${Math.random().toString(36).substring(7)}`;
}

type OnMouseEnterType = (
  index: number,
  event: React.MouseEvent<HTMLSpanElement>
) => unknown;
export type RatingPropsType = {
  size?: RatingSizeType;
  rate: number;
  metricSize: number;
  active?: boolean;
  onChange: (arg0: number) => unknown;
  onStarMouseEnter: OnMouseEnterType;
  onMouseLeave: () => unknown;
  counterText?: string;
  activeText?: string;
  noLabel?: boolean;
  className?: string;
  'aria-label'?: string;
} & Omit<
  React.AllHTMLAttributes<HTMLElement>,
  | 'size'
  | 'rate'
  | 'metricSize'
  | 'active'
  | 'onChange'
  | 'onStarMouseEnter'
  | 'onMouseLeave'
  | 'counterText'
  | 'activeText'
  | 'noLabel'
  | 'className'
  | 'undefined'
>;
/* eslint-disable react/default-props-match-prop-types */
// legacy files without proper flow checks can suffer from this

const defaultProps: RatingPropsType = {
  onChange: () => undefined,
  onStarMouseEnter: () => undefined,
  onMouseLeave: () => undefined,
  metricSize: 5,
  rate: 0,
  'aria-label': 'current rate',
};

class Rating extends React.Component<RatingPropsType> {
  constructor(props = defaultProps) {
    super(props);
    this.createStarsOnChangeFunctions(this.props.metricSize);
    this.createStarsMouseEnterFunctions(this.props.metricSize);
    this.name = generateName();
  }

  name: string;
  starsOnChangeFunctions: Array<() => unknown> = [];
  starsMouseEnterFunctions: Array<
    (arg0: React.MouseEvent<HTMLSpanElement>) => unknown
  > = [];

  // It's a typo, should be componentWillReceiveProps (UNSAFE_componentWillReceiveProps)
  componentWillReciveProps(nextProps: RatingPropsType) {
    if (this.props.metricSize !== nextProps.metricSize) {
      this.createStarsOnChangeFunctions(nextProps.metricSize);
      this.createStarsMouseEnterFunctions(this.props.metricSize);
    }
  }

  createStarsOnChangeFunctions(metricSize: number) {
    this.starsOnChangeFunctions = generateArrayRange(metricSize).map(
      rangeIndex => () => this.onStarChange(rangeIndex)
    );
  }

  createStarsMouseEnterFunctions(metricSize: number) {
    this.starsMouseEnterFunctions = generateArrayRange(metricSize).map(
      rangeIndex => event => this.onStarMouseEnter(rangeIndex, event)
    );
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
    event: React.MouseEvent<HTMLSpanElement>
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
      'aria-label': label,
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
      size: size === 's' ? (32 as const) : (24 as const),
      onChange: this.starsOnChangeFunctions[rangeIndex],
      active,
      name: this.name,
      'aria-label': `${rangeIndex + 1}/${metricSize}`,
      value: rangeIndex + 1,
    }));

    const rateString = rate.toLocaleString(undefined, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
    const rateLabel = `${activeText || ''}, min: 1, max: ${metricSize}`;
    const metricString = `${rate}/${metricSize}`;

    if (__DEV__) {
      invariant(
        !(active && !this.props.onChange), // eslint-disable-next-line max-len
        'You provided an `active` prop to a Rating without an `onChange` handler. Users won`t be able to rate.'
      );
      invariant(
        !(!active && this.props.onChange), // eslint-disable-next-line max-len
        'You provided an `onChange` handler to a Rating without an `active` prop. Users won`t be able to rate.'
      );
    }

    return (
      <div className={ratingClass}>
        <span className="sg-visually-hidden">{label}</span>
        <p className="sg-rate-box__rate">
          {!noLabel && <span aria-hidden>{rateString}</span>}
          {Boolean(rate) && (
            <span className="sg-visually-hidden">{metricString}</span>
          )}
        </p>
        <div
          className="sg-rate-box__stars-container"
          onMouseLeave={this.onMouseLeave}
        >
          <div
            className="sg-rate-box__filled-stars"
            style={{
              width: `${(100 * rate) / metricSize}%`,
            }}
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
            aria-label={rateLabel}
          >
            {starsProps.map(props => (
              <Star
                key={props.value}
                onMouseEnter={this.starsMouseEnterFunctions[props.value]}
                {...props}
                type="star_outlined"
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
