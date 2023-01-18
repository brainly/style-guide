import * as React from 'react';
import {shallow, mount} from 'enzyme';
import Icon from 'icons/Icon';
import Rating, {RATING_SIZE} from './Rating';
import RateCounter from './subcomponents/RateCounter';
import Star from './subcomponents/Star';

describe('rating', () => {
  it('renders correctly', () => {
    const rating = shallow(<Rating />);

    expect(rating.hasClass('sg-rate-box')).toEqual(true);
  });
  it("doesn't throw error when no onChange", () => {
    const spy = jest.spyOn(console, 'error');

    shallow(<Rating />);
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });
  it('active', () => {
    const rating = shallow(<Rating active />);

    expect(rating.hasClass('sg-rate-box--active')).toEqual(true);
  });
  it('renders stars - defined metricSize', () => {
    const metricSize = 8;
    const rating = shallow(<Rating active metricSize={metricSize} />);

    expect(rating.find(Star)).toHaveLength(2 * metricSize);
  });
  it('renders stars - default number of stars', () => {
    const defaultMetricSize = 5;
    const rating = shallow(<Rating />);

    expect(rating.find(Star)).toHaveLength(2 * defaultMetricSize);
  });
  it('fills stars', () => {
    const rate = 3;
    const metric = 10;
    const percentageRate = `${(100 * rate) / metric}%`;
    const rating = shallow(<Rating rate={rate} metricSize={metric} />);
    const filledStarsBox = rating.find('.sg-rate-box__filled-stars');
    const filledWidth = filledStarsBox.props().style.width;

    expect(filledWidth).toEqual(percentageRate);
  });
  it("doesn't throw error when onChange isn't defined", () => {
    const spy = jest.spyOn(console, 'error');

    const rate = 3;
    const rating = mount(<Rating rate={rate} />);
    const stars = rating.find(Star);

    stars.at(0).simulate('click');
    stars.at(1).simulate('click');
    const lastRatedStarIndex = rate - 1;

    stars.at(lastRatedStarIndex).simulate('click');
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });
  it('has small size', () => {
    const rating = shallow(<Rating size={RATING_SIZE.S} />);
    const stars = rating.find(Star);

    expect(rating.hasClass('sg-rate-box--s')).toEqual(true);
    stars.forEach(star => {
      expect(star.props().size).toEqual(32);
    });
  });
  it('renders without label', () => {
    const rating = shallow(<Rating noLabel />);

    expect(rating.hasClass('sg-rate-box__rate')).toEqual(false);
  });
  describe('counter text', () => {
    it('exists', () => {
      const rating = shallow(<Rating />);
      const rateCounter = rating.find(RateCounter);

      expect(rateCounter).toHaveLength(1);
    });
    it("displays counter text when no active and haven't been rated", () => {
      const rating = shallow(<Rating />);
      const rateCounter = rating.find(RateCounter);

      expect(rateCounter.props().showActiveText).toBeFalsy();
    });
    it('displays counter text when have been rated and no active', () => {
      const rating = shallow(<Rating rate={3} />);
      const rateCounter = rating.find(RateCounter);

      expect(rateCounter.props().showActiveText).toBeFalsy();
    });
    it('displays counter text when have been rated and active', () => {
      const rating = shallow(<Rating rate={3} active />);
      const rateCounter = rating.find(RateCounter);

      expect(rateCounter.props().showActiveText).toBeFalsy();
    });
    // should be near same as above, so if we let delete above we need delete it here
    it("doesn't display active text when no active and mouse over stars", () => {
      const rating = mount(<Rating rate={3} />);
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
    const star = shallow(<Star />);

    expect(star.hasClass('sg-rate-box__star')).toEqual(true);
  });
  it('uses Icon component', () => {
    const size = 16;
    const star = shallow(<Star size={size} />);

    expect(star.find(Icon)).toHaveLength(1);
  });
  it('passes size to icon', () => {
    const size = 16;
    const star = shallow(<Star size={size} />);
    const icon = star.find(Icon);

    expect(icon.props().size).toEqual(size);
  });
});
