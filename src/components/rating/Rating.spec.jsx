import * as React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Icon from 'icons/Icon';
import Rating, {RATING_SIZE, METRIC_SIZE} from './Rating';
import RateCounter from './subcomponents/RateCounter';
import Star from './subcomponents/Star';

describe('rating', () => {
  it('renders correctly', () => {
    const {container} = render(<Rating />);

    expect(container.getElementsByClassName('sg-rate-box')).toHaveLength(1);
    expect(screen.getByText('0.0')).toBeInTheDocument();
  });

  it('renders stars', () => {
    const {container} = render(<Rating />);

    expect(
      container.getElementsByClassName('sg-rate-box__star-icon')
    ).toHaveLength(2 * METRIC_SIZE);
    expect(container.getElementsByClassName('sg-icon--x24')).toHaveLength(
      2 * METRIC_SIZE
    );
  });

  it('fills stars', () => {
    const rate = 3;
    const percentageRate = `${(100 * rate) / METRIC_SIZE}%`;

    const {container} = render(<Rating rate={rate} />);

    const filledStars = container.getElementsByClassName(
      'sg-rate-box__filled-stars'
    );
    const style = window.getComputedStyle(filledStars[0]);

    expect(filledStars).toHaveLength(1);
    expect(style.width).toBe(percentageRate);
  });

  it('renders small size', () => {
    const {container} = render(<Rating size={RATING_SIZE.S} />);

    expect(container.getElementsByClassName('sg-rate-box--s')).toHaveLength(1);
    expect(container.getElementsByClassName('sg-icon--x32')).toHaveLength(
      2 * METRIC_SIZE
    );
  });

  it('renders without label', () => {
    render(<Rating noLabel />);

    expect(screen.queryByText('0.0')).not.toBeInTheDocument();
  });

  it('does not render counter text by default', () => {
    const {container} = render(<Rating rate={3} />);

    expect(
      container.getElementsByClassName('sg-rate-box__counter')
    ).toHaveLength(0);
  });

  it('displays counter text', () => {
    const {container} = render(<Rating counterText="counter text" />);

    expect(
      container.getElementsByClassName('sg-rate-box__counter')
    ).toHaveLength(1);
  });
});

describe('star', () => {
  it('renders', () => {
    const {container} = render(<Star />);

    expect(container.getElementsByClassName('sg-rate-box__star')).toHaveLength(
      1
    );
    expect(
      container.getElementsByClassName('sg-rate-box__star-icon')
    ).toHaveLength(1);
  });

  it('passes size to icon', () => {
    const size = 16;

    const {container} = render(<Star size={size} />);

    expect(container.getElementsByClassName('sg-icon--x16')).toHaveLength(1);
  });
});
