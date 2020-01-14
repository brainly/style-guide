import React from 'react';
import { shallow, mount } from 'enzyme';
import Icon from 'icons/Icon';
import Rating, { RATING_SIZE } from './Rating';
import RateCounter from './subcomponents/RateCounter';
import Star from './subcomponents/Star';
describe('rating', function () {
  it('renders correctly', function () {
    var rating = shallow(React.createElement(Rating, null));
    expect(rating.hasClass('sg-rate-box')).toEqual(true);
  });
  it("doesn't throw error when no onChange", function () {
    var spy = jest.spyOn(console, 'error');
    console.error = jest.fn();
    shallow(React.createElement(Rating, null));
    expect(console.error.mock.calls).toHaveLength(0);
    spy.mockRestore();
  });
  it('active', function () {
    var rating = shallow(React.createElement(Rating, {
      active: true
    }));
    expect(rating.hasClass('sg-rate-box--active')).toEqual(true);
  });
  it('renders stars - defined metricSize', function () {
    var metricSize = 8;
    var rating = shallow(React.createElement(Rating, {
      active: true,
      metricSize: metricSize
    }));
    expect(rating.find(Star)).toHaveLength(2 * metricSize);
  });
  it('renders stars - default number of stars', function () {
    var defaultMetricSize = 5;
    var rating = shallow(React.createElement(Rating, null));
    expect(rating.find(Star)).toHaveLength(2 * defaultMetricSize);
  });
  it('fills stars', function () {
    var rate = 3;
    var metric = 10;
    var percentageRate = "".concat(100 * rate / metric, "%");
    var rating = shallow(React.createElement(Rating, {
      rate: rate,
      metricSize: metric
    }));
    var filledStarsBox = rating.find('.sg-rate-box__filled-stars');
    var filledWidth = filledStarsBox.props().style.width;
    expect(filledWidth).toEqual(percentageRate);
  });
  it("onchange func doesn't call when no active", function () {
    var onChange = jest.fn();
    var rate = 3;
    var rating = mount(React.createElement(Rating, {
      rate: rate,
      onChange: onChange
    }));
    var stars = rating.find(Star);
    expect(onChange.mock.calls).toHaveLength(0);
    stars.at(0).simulate('click');
    expect(onChange.mock.calls).toHaveLength(0);
    stars.at(1).simulate('click');
    expect(onChange.mock.calls).toHaveLength(0);
  });
  it('onchange', function () {
    var onChange = jest.fn();
    var rate = 3;
    var rating = mount(React.createElement(Rating, {
      rate: rate,
      onChange: onChange,
      active: true
    }));
    var stars = rating.find(Star);
    expect(onChange.mock.calls).toHaveLength(0);
    stars.at(0).simulate('click');
    expect(onChange.mock.calls).toHaveLength(1);
    stars.at(1).simulate('click');
    expect(onChange.mock.calls).toHaveLength(2);
  });
  it("doesn't throw error when onChange isn't defined", function () {
    var spy = jest.spyOn(console, 'error');
    console.error = jest.fn();
    var rate = 3;
    var rating = mount(React.createElement(Rating, {
      rate: rate,
      active: true
    }));
    var stars = rating.find(Star);
    stars.at(0).simulate('click');
    stars.at(1).simulate('click');
    var lastRatedStarIndex = rate - 1;
    stars.at(lastRatedStarIndex).simulate('click');
    expect(console.error.mock.calls).toHaveLength(0);
    spy.mockRestore();
  });
  it('large', function () {
    var rating = shallow(React.createElement(Rating, {
      size: RATING_SIZE.LARGE
    }));
    var stars = rating.find(Star);
    expect(rating.hasClass('sg-rate-box--large')).toEqual(true);
    stars.forEach(function (star) {
      expect(star.props().size).toEqual(RATING_SIZE.LARGE);
    });
  });
  it('renders without label', function () {
    var rating = shallow(React.createElement(Rating, {
      noLabel: true
    }));
    expect(rating.hasClass('sg-rate-box__rate')).toEqual(false);
  });
  describe('counter text', function () {
    it('exists', function () {
      var rating = shallow(React.createElement(Rating, null));
      var rateCounter = rating.find(RateCounter);
      expect(rateCounter).toHaveLength(1);
    });
    it("displays counter text when no active and haven't been rated", function () {
      var rating = shallow(React.createElement(Rating, null));
      var rateCounter = rating.find(RateCounter);
      expect(rateCounter.props().showActiveText).toBeFalsy();
    });
    it('displays counter text when have been rated and no active', function () {
      var rating = shallow(React.createElement(Rating, {
        rate: 3
      }));
      var rateCounter = rating.find(RateCounter);
      expect(rateCounter.props().showActiveText).toBeFalsy();
    });
    it('displays counter text when have been rated and active', function () {
      var rating = shallow(React.createElement(Rating, {
        rate: 3,
        active: true
      }));
      var rateCounter = rating.find(RateCounter);
      expect(rateCounter.props().showActiveText).toBeFalsy();
    }); // should be near same as above, so if we let delete above we need delete it here

    it("doesn't display active text when no active and mouse over stars", function () {
      var rating = mount(React.createElement(Rating, {
        rate: 3
      }));
      var stars = rating.find('.sg-rate-box__stars-container');
      var rateCounter = rating.find(RateCounter);
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
describe('star', function () {
  it('renders', function () {
    var star = shallow(React.createElement(Star, {
      onClick: jest.fn()
    }));
    expect(star.hasClass('sg-rate-box__star')).toEqual(true);
  });
  it('uses Icon component', function () {
    var size = 16;
    var star = shallow(React.createElement(Star, {
      size: size,
      onClick: jest.fn()
    }));
    expect(star.find(Icon)).toHaveLength(1);
  });
  it('onClick', function () {
    var onClick = jest.fn();
    var star = shallow(React.createElement(Star, {
      onClick: onClick
    }));
    expect(onClick.mock.calls).toHaveLength(0);
    star.simulate('click');
    expect(onClick.mock.calls).toHaveLength(1);
  });
  it('passes size to icon', function () {
    var size = 16;
    var star = shallow(React.createElement(Star, {
      size: size,
      onClick: jest.fn()
    }));
    var icon = star.find(Icon);
    expect(icon.props().size).toEqual(size);
  });
});