import * as React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Icon from 'icons/Icon';
import Rating, {RATING_SIZE} from './Rating';
import RateCounter from './subcomponents/RateCounter';
import Star from './subcomponents/Star';

describe('rating', () => {
  it('active', () => {
    const rating = render(<Rating active />);

    expect(
      rating.container.firstElementChild.classList.contains(
        'sg-rate-box--active'
      )
    ).toEqual(true);
  });

  it('renders stars - defined metricSize', () => {
    const metricSize = 8;
    const rating = render(<Rating active metricSize={metricSize} />);

    expect(rating.queryAllByRole('img', {hidden: true})).toHaveLength(
      2 * metricSize
    );
  });

  it('renders 5 stars by default', () => {
    const rating = render(<Rating />);

    expect(rating.queryAllByRole('img', {hidden: true})).toHaveLength(5 * 2);
  });

  it('fills stars', () => {
    const rate = 3;
    const metric = 10;
    const percentageRate = `${(100 * rate) / metric}%`;
    const rating = render(<Rating rate={rate} metricSize={metric} />);
    const filledStarsBox: HTMLElement =
      rating.container.firstElementChild.querySelector(
        '.sg-rate-box__filled-stars'
      );
    const filledWidth = filledStarsBox.style.width;

    expect(filledWidth).toEqual(percentageRate);
  });

  it('has small size', () => {
    const rating = render(<Rating size={RATING_SIZE.S} />);

    expect(
      rating.container.firstElementChild.classList.contains('sg-rate-box--s')
    ).toEqual(true);
  });

  it('renders without label', () => {
    const rating = render(<Rating noLabel />);

    expect(
      rating.container.firstElementChild.classList.contains('sg-rate-box__rate')
    ).toEqual(false);
  });

  describe('counter text', () => {
    it("displays counter text when no active and haven't been rated", () => {
      const rating = render(<Rating counterText="foo" />);

      expect(rating.queryAllByText('foo')).toHaveLength(2);
    });

    it('displays counter text when have been rated and no active', () => {
      const rating = render(<Rating rate={3} counterText="foo" />);

      expect(rating.queryAllByText('foo')).toHaveLength(2);
    });

    it('displays counter text when have been rated and active', () => {
      const rating = render(<Rating rate={3} active counterText="foo" />);

      expect(rating.queryAllByText('foo')).toHaveLength(2);
    });

    // should be near same as above, so if we let delete above we need delete it here
    it("doesn't display active text when no active and mouse over stars", () => {
      const rating = render(<Rating rate={3} activeText="foo" />);
      const stars = rating.container.firstElementChild.querySelector(
        '.sg-rate-box__stars-container'
      );

      expect(rating.queryAllByText('foo')).toHaveLength(2);
      fireEvent.mouseEnter(stars);
      expect(rating.queryAllByText('foo')).toHaveLength(2);
      fireEvent.mouseLeave(stars);
      expect(rating.queryAllByText('foo')).toHaveLength(2);
    });
  });
});

describe('star', () => {
  it('renders', () => {
    const star = render(<Star />);

    expect(
      star.container.firstElementChild.classList.contains('sg-rate-box__star')
    ).toEqual(true);
    expect(star.queryByRole('img', {hidden: true})).toBeTruthy();
  });
});
