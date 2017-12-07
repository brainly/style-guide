import React from 'react';
import Rating, {Star} from './Rating';
import Icon from 'icons/Icon';
import {shallow, mount} from 'enzyme';

describe('rating', () => {
  test('render', () => {
    const rating = shallow(
      <Rating />
    );

    expect(rating.hasClass('sg-rate-box')).toEqual(true);
  });

  test('shouldn\'t throw error when no onChange', () => {
    const spy = jest.spyOn(console, 'error');

    console.error = jest.fn();
    shallow(<Rating />);
    expect(console.error.mock.calls).toHaveLength(0);

    spy.mockRestore();
  });

  test('active', () => {
    const rating = shallow(
      <Rating active />
    );

    expect(rating.hasClass('sg-rate-box--active')).toEqual(true);
  });

  test('render stars - defined metricSize', () => {
    const metricSize = 8;
    const rating = shallow(
      <Rating active metricSize={metricSize} />
    );

    expect(rating.find(Star)).toHaveLength(metricSize);
  });

  test('render stars - default number of stars', () => {
    const defaultMetricSize = 5;
    const rating = shallow(
      <Rating />
    );

    expect(rating.find(Star)).toHaveLength(defaultMetricSize);
  });

  test('rate', () => {
    const rate = 3;
    const rating = shallow(
      <Rating rate={3} />
    );
    const stars = rating.find(Star);
    let checkedStars = 0;

    stars.forEach(star => {
      if (star.props().checked) {
        checkedStars++;
      }
    });

    expect(checkedStars).toEqual(rate);
  });

  test('onchange not working when no active', () => {
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

  test('onchange', () => {
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

    const lastRatedStarIndex = rate - 1;

    //shouldn't call onChange when same rate clicked
    stars.at(lastRatedStarIndex).simulate('click');
    expect(onChange.mock.calls).toHaveLength(2);
  });

  test('clicking not defined on change not throw errors', () => {
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

  test('small', () => {
    const sizeOfSmallStar = 14;
    const rating = shallow(
      <Rating small />
    );
    const stars = rating.find(Star);

    expect(rating.hasClass('sg-rate-box--small')).toEqual(true);

    stars.forEach(star => {
      expect(star.props().size).toEqual(sizeOfSmallStar);
    });
  });

  test('no small', () => {
    const sizeOfNormalStar = 16;
    const rating = shallow(
      <Rating />
    );
    const stars = rating.find(Star);

    expect(rating.hasClass('sg-rate-box--small')).toEqual(false);

    stars.forEach(star => {
      expect(star.props().size).toEqual(sizeOfNormalStar);
    });
  });
});

describe('star', () => {
  const dumpFnc = () => undefined;

  test('render', () => {
    const star = shallow(
      <Star onClick={dumpFnc} />
    );

    expect(star.hasClass('sg-rate-box__star')).toEqual(true);
  });

  test('Star use Icon component', () => {
    const size = 16;
    const star = shallow(
      <Star size={size} onClick={dumpFnc} />
    );

    expect(star.find(Icon)).toHaveLength(1);
  });

  test('click working', () => {
    const onClick = jest.fn();
    const star = shallow(<Star onClick={onClick} />);

    expect(onClick.mock.calls).toHaveLength(0);

    star.simulate('click');
    expect(onClick.mock.calls).toHaveLength(1);
  });

  test('should throw error when no onClick', () => {
    const spy = jest.spyOn(console, 'error');

    console.error = jest.fn();
    mount(<Star />);

    expect(console.error.mock.calls).toHaveLength(1);

    spy.mockRestore();
  });

  test('checked', () => {
    const star = shallow(
      <Star checked onClick={dumpFnc} />
    );

    expect(star.hasClass('sg-rate-box__star--checked')).toEqual(true);
  });

  test('pass size to icon', () => {
    const size = 16;
    const star = shallow(
      <Star size={size} onClick={dumpFnc} />
    );

    const icon = star.find(Icon);

    expect(icon.props().size).toEqual(size);
  });
});
