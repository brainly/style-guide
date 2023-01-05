import * as React from 'react';
import {render} from '@testing-library/react';
import Rating from './Rating';
import Star from './subcomponents/Star';
import {testA11y} from '../../axe';
import userEvent from '@testing-library/user-event';
describe('Rating', () => {
  it('has accessible description of current rate', () => {
    const rate = 3.4;
    const star = render(<Rating rate={rate} />);
    expect(star.getByText(`${rate}/5`)).toBeTruthy();
  });
  it('has accessible description of rate action with min & max value', () => {
    const activeText = 'Rate this answer';
    const rateLabel = `${activeText}, min: 1, max: 5`;
    const star = render(<Rating activeText={activeText} active />);
    expect(star.getByLabelText(rateLabel)).toBeTruthy();
  });
  it('has radiogroup role when active', () => {
    const star = render(<Rating active />);
    expect(star.getByRole(`radiogroup`)).toBeTruthy();
  });
  it('calls onChange for active rating value change on user click and space', () => {
    const onChange = jest.fn();
    const rate = 3;
    const rating = render(<Rating rate={rate} onChange={onChange} active />);
    expect(onChange.mock.calls).toHaveLength(0);
    userEvent.click(rating.getByLabelText('2/5'));
    expect(onChange.mock.calls).toHaveLength(1);
    rating.getByLabelText('4/5').focus();
    expect(rating.getByLabelText('4/5')).toEqual(document.activeElement);
    userEvent.keyboard('{space}');
    expect(onChange.mock.calls).toHaveLength(2);
  });
  it('doesn`t render inputs when rating is not active', () => {
    const onChange = jest.fn();
    const rate = 3;
    const rating = render(<Rating rate={rate} onChange={onChange} />);
    expect(rating.queryByLabelText('2/5')).toBeFalsy();
  });
});
describe('Star', () => {
  it('has accessible label for radio input', () => {
    const onChange = jest.fn();
    const label = '2/6';
    const star = render(
      <Star
        onChange={onChange}
        aria-label={label}
        value={2}
        name="rating"
        active
      />
    );
    expect(star.getByRole('radio', label)).toBeTruthy();
  });
  it('is not accessible when is not active ', () => {
    const label = '2/6';
    const rating = render(<Star aria-label={label} />);
    expect(rating.queryByLabelText(label)).toBeFalsy();
  });
  it('fires onChange on user click and space', () => {
    const onChange = jest.fn();
    const star = render(
      <div>
        <Star
          onChange={onChange}
          aria-label="2/6"
          value={2}
          name="rating"
          active
        />
        <Star
          onChange={onChange}
          aria-label="3/6"
          value={3}
          name="rating"
          active
        />
      </div>
    );
    expect(onChange.mock.calls).toHaveLength(0);
    userEvent.click(star.getByLabelText('2/6'));
    expect(onChange.mock.calls).toHaveLength(1);
    star.getByLabelText('3/6').focus();
    expect(star.getByLabelText('3/6')).toEqual(document.activeElement);
    userEvent.keyboard('{space}');
    expect(onChange.mock.calls).toHaveLength(2);
  });
});
describe('Rating a11y', () => {
  it('should have no a11y violations when rating is active', async () => {
    await testA11y(<Rating active />);
  });
  it('should have no a11y violations when rating is active and has activeText', async () => {
    await testA11y(<Rating activeText="Rate this answer" active />);
  });
  it('should have no a11y violations when rate is provided', async () => {
    await testA11y(<Rating rate={3.2} active />);
  });
  it('should have no a11y violations when rating is not active', async () => {
    await testA11y(<Rating />);
  });
});
describe('Star a11y', () => {
  it('should have no a11y violations when star is active', async () => {
    await testA11y(<Star aria-label="2/6" name="rating" active />);
  });
  it('should have no a11y violations when star is not active', async () => {
    await testA11y(<Star />);
  });
});