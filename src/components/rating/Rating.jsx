// @flow strict

import * as React from 'react';
import classnames from 'classnames';
import Star from './subcomponents/Star';
import RateCounter from './subcomponents/RateCounter';

type RatingSizeType = 's' | 'xs';

export const METRIC_SIZE = 5;

export const RATING_SIZE = {
  XS: 'xs',
  S: 's',
};

export type RatingPropsType = $ReadOnly<{
  rate?: number,
  counterText?: string,
  size?: RatingSizeType,
  noLabel?: boolean,
  className?: string,
  ariaRatingLabel?: string,
}>;

const Rating = ({
  rate = 0,
  counterText,
  size = RATING_SIZE.XS,
  noLabel = false,
  className,
  ariaRatingLabel = 'current rate',
}: RatingPropsType) => {
  const ratingClass = classnames(
    'sg-rate-box',
    {
      'sg-rate-box--s': size === RATING_SIZE.S,
    },
    className
  );

  const starSize = size === 's' ? 32 : 24;

  const rateString = rate.toLocaleString(undefined, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  const rateLabel = `min: 1, max: ${METRIC_SIZE}`;
  const metricString = `${rate}/${METRIC_SIZE}`;

  return (
    <div className={ratingClass} role="img" aria-label={ariaRatingLabel}>
      <p className="sg-rate-box__rate">
        {!noLabel && <span aria-hidden>{rateString}</span>}
        {Boolean(rate) && (
          <span className="sg-visually-hidden">{metricString}</span>
        )}
      </p>
      <div className="sg-rate-box__stars-container">
        <div
          className="sg-rate-box__filled-stars"
          style={{width: `${(100 * rate) / METRIC_SIZE}%`}}
          aria-hidden
        >
          {[...Array(METRIC_SIZE)].map((_, index) => (
            <Star key={index} size={starSize} />
          ))}
        </div>
        <div
          className="sg-rate-box__background-stars"
          role="radiogroup"
          aria-hidden
          aria-label={rateLabel}
        >
          {[...Array(METRIC_SIZE)].map((_, index) => (
            <Star key={index} size={starSize} type="star_outlined" />
          ))}
        </div>
      </div>
      {counterText && <RateCounter counterText={counterText} />}
    </div>
  );
};

export default Rating;
