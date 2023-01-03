import * as React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import Rating from './Rating';
import Star from './subcomponents/Star';
import {testA11y} from '../../axe';

describe('Rating', () => {
  it('has accessible description of current rate', () => {
    const rate = 3.4;

    const rating = render(<Rating rate={rate} />);

    expect(rating.getByText(`${rate}/5`)).toBeTruthy();
    expect(rating.queryByLabelText('current rate')).toBeTruthy();
    expect(rating.queryByLabelText('min: 1, max: 5')).toBeTruthy();
  });
});

describe('Star', () => {
  it('is aria-hidden', () => {
    const {container} = render(<Star size="32" />);

    expect(container.getElementsByClassName('sg-icon')[0]).toHaveAttribute(
      'aria-hidden',
      'true'
    );
  });

  describe('Rating a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(<Rating />);
    });
  });

  describe('Star a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(<Star size="32" />);
    });
  });
});
