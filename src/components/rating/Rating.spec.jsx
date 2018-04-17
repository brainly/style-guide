import React from 'react';
import {shallow, mount} from 'enzyme';
import Icon from 'icons/Icon';
import Rating, {RATING_SIZE} from './Rating';
import RateCounter from './subcomponents/RateCounter';
import Star from './subcomponents/Star';

describe('rating', () => {
  it('renders correctly', () => {
    const rating = shallow(
      <Rating />
    );

    expect(rating.hasClass('sg-rate-box')).toEqual(true);
  });

  it('doesn\'t throw error when no onChange', () => {
    const spy = jest.spyOn(console, 'error');

    console.error = jest.fn();
    shallow(<Rating />);
    expect(console.error.mock.calls).toHaveLength(0);

    spy.mockRestore();
  });

  it('active', () => {
    const rating = shallow(
      <Rating active />
    );

    expect(rating.hasClass('sg-rate-box--active')).toEqual(true);
  });

  it('renders stars - defined metricSize', () => {
    const metricSize = 8;
    const rating = shallow(
      <Rating active metricSize={metricSize} />
    );

    expect(rating.find(Star)).toHaveLength(2 * metricSize);
  });

  it('renders stars - default number of stars', () => {
    const defaultMetricSize = 5;
    const rating = shallow(
      <Rating />
    );

    expect(rating.find(Star)).toHaveLength(2 * defaultMetricSize);
  });

  it('fills stars', () => {
    const rate = 3;
    const metric = 10;
    const percentageRate = `${100 * rate / metric}%`;
    const rating = shallow(
      <Rating rate={rate} metricSize={metric} />
    );
    const filledStarsBox = rating.find('.sg-rate-box__filled-stars');
    const filledWidth = filledStarsBox.props().style.width;

    expect(filledWidth).toEqual(percentageRate);
  });

  it('onchange func doesn\'t call when no active', () => {
    const onChange = jest.fn();
    const rate = 3;
    const rating = mount(
      <Rating rate={rate} onChange={onChange} />
    );
    const stars = rating.find(Star);

    expect(onChange.mock.calls).toHaveLength(0);

    stars.at(0).simulate('click');
    expect(onChange.mock.calls).toHaveLength(0);

    stars.at(1).simulate('click');
    expect(onChange.mock.calls).toHaveLength(0);
  });

  it('onchange', () => {
    const onChange = jest.fn();
    const rate = 3;
    const rating = mount(
      <Rating rate={rate} onChange={onChange} active />
    );
    const stars = rating.find(Star);

    expect(onChange.mock.calls).toHaveLength(0);

    stars.at(0).simulate('click');
    expect(onChange.mock.calls).toHaveLength(1);

    stars.at(1).simulate('click');
    expect(onChange.mock.calls).toHaveLength(2);
  });

  it('doesn\'t throw error when onChange isn\'t defined', () => {
    const spy = jest.spyOn(console, 'error');

    console.error = jest.fn();

    const rate = 3;
    const rating = mount(
      <Rating rate={rate} active />
    );
    const stars = rating.find(Star);

    stars.at(0).simulate('click');
    stars.at(1).simulate('click');

    const lastRatedStarIndex = rate - 1;

    stars.at(lastRatedStarIndex).simulate('click');

    expect(console.error.mock.calls).toHaveLength(0);

    spy.mockRestore();
  });

  it('large', () => {
    const rating = shallow(
      <Rating size={RATING_SIZE.LARGE} />
    );
    const stars = rating.find(Star);

    expect(rating.hasClass('sg-rate-box--large')).toEqual(true);

    stars.forEach(star => {
      expect(star.props().size).toEqual(RATING_SIZE.LARGE);
    });
  });

  describe('counter text', () => {
    it('exists', () => {
      const rating = shallow(
        <Rating />
      );
      const rateCounter = rating.find(RateCounter);

      expect(rateCounter).toHaveLength(1);
    });

    it('displays counter text when no active and haven\'t been rated', () => {
      const rating = shallow(
        <Rating />
      );
      const rateCounter = rating.find(RateCounter);

      expect(rateCounter.props().showActiveText).toBeFalsy();
    });

    it('displays counter text when have been rated and no active', () => {
      const rating = shallow(
        <Rating rate={3} />
      );
      const rateCounter = rating.find(RateCounter);

      expect(rateCounter.props().showActiveText).toBeFalsy();
    });

    it('displays counter text when have been rated and active', () => {
      const rating = shallow(
        <Rating rate={3} active />
      );
      const rateCounter = rating.find(RateCounter);

      expect(rateCounter.props().showActiveText).toBeFalsy();
    });

    // should be near same as above, so if we let delete above we need delete it here
    it('doesn\'t display active text when no active and mouse over stars', () => {
      const rating = mount(
        <Rating rate={3} />
      );
      const stars = rating.find('.sg-rate-box__stars-container');
      let rateCounter = rating.find(RateCounter);

      expect(rateCounter.props().showActiveText).toBeFalsy();

      stars.simulate('mouseEnter');
      rateCounter = rating.find(RateCounter);
      expect(rateCounter.props().showActiveText).toBeFalsy();

      stars.simulate('mouseLeave');
      rateCounter = rating.find(RateCounter);
      expect(rateCounter.props().showActiveText).toBeFalsy();
    });
  });
});

describe('star', () => {
  it('renders', () => {
    const star = shallow(
      <Star onClick={jest.fn()} />
    );

    expect(star.hasClass('sg-rate-box__star')).toEqual(true);
  });

  it('uses Icon component', () => {
    const size = 16;
    const star = shallow(
      <Star size={size} onClick={jest.fn()} />
    );

    expect(star.find(Icon)).toHaveLength(1);
  });

  it('onClick', () => {
    const onClick = jest.fn();
    const star = shallow(<Star onClick={onClick} />);

    expect(onClick.mock.calls).toHaveLength(0);

    star.simulate('click');
    expect(onClick.mock.calls).toHaveLength(1);
  });

  it('passes size to icon', () => {
    const size = 16;
    const star = shallow(
      <Star size={size} onClick={jest.fn()} />
    );

    const icon = star.find(Icon);

    expect(icon.props().size).toEqual(size);
  });
});
