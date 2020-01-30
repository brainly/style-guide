import React from 'react';
import TopLayer, {SIZE} from './TopLayer';
import {mount, shallow} from 'enzyme';

test('render', () => {
  const topLayer = shallow(<TopLayer>some text</TopLayer>);

  expect(topLayer.hasClass('sg-toplayer')).toEqual(true);
});

test('default size', () => {
  const topLayer = shallow(<TopLayer>some text</TopLayer>);

  Object.values(SIZE).forEach(size => {
    expect(topLayer.hasClass(`sg-toplayer--${size}`)).toEqual(false);
  });
});

test('check if close button exists', () => {
  const mockCallback = jest.fn();
  const topLayer = mount(<TopLayer onClose={mockCallback} />);

  expect(topLayer.find('.sg-toplayer__close')).toHaveLength(1);
});

test('check when no close button', () => {
  const topLayer = mount(<TopLayer />);

  expect(topLayer.find('.sg-toplayer__close')).toHaveLength(0);
});

test('click action', () => {
  const mockCallback = jest.fn();
  const topLayer = mount(<TopLayer onClose={mockCallback} />);
  const button = topLayer.find('.sg-toplayer__close');

  button.simulate('click');
  expect(mockCallback.mock.calls).toHaveLength(1);
});

test('key down action', () => {
  const mockCallback = jest.fn();
  const topLayer = mount(
    <TopLayer onClose={mockCallback} onKeyDown={mockCallback} />
  );
  const button = topLayer.find('.sg-toplayer__close');

  button.simulate('keyDown');
  expect(mockCallback.mock.calls).toHaveLength(1);
});

test('size', () => {
  const size = SIZE.SMALL;
  const topLayer = shallow(<TopLayer size={size}>some text</TopLayer>);

  expect(topLayer.hasClass(`sg-toplayer--${size}`)).toEqual(true);
});

test('testing modifications - all on', () => {
  const topLayer = shallow(
    <TopLayer
      fill
      lead
      limitedWidth
      modal
      row
      smallSpaced
      splashScreen
      withBugbox
    >
      some text
    </TopLayer>
  );

  expect(topLayer.hasClass('sg-toplayer--lead')).toEqual(true);
  expect(topLayer.hasClass('sg-toplayer--fill')).toEqual(true);
  expect(topLayer.hasClass('sg-toplayer--modal')).toEqual(true);
  expect(topLayer.hasClass('sg-toplayer--with-bugbox')).toEqual(true);
  expect(topLayer.hasClass('sg-toplayer--small-spaced')).toEqual(true);
  expect(topLayer.hasClass('sg-toplayer--splash-screen')).toEqual(true);
  expect(topLayer.hasClass('sg-toplayer--limited-width')).toEqual(true);
  expect(topLayer.hasClass('sg-toplayer--row')).toEqual(true);
});

test('testing modifications - all off', () => {
  const topLayer = shallow(<TopLayer>some text</TopLayer>);

  expect(topLayer.hasClass('sg-toplayer--lead')).toEqual(false);
  expect(topLayer.hasClass('sg-toplayer--fill')).toEqual(false);
  expect(topLayer.hasClass('sg-toplayer--modal')).toEqual(false);
  expect(topLayer.hasClass('sg-toplayer--with-bugbox')).toEqual(false);
  expect(topLayer.hasClass('sg-toplayer--small-spaced')).toEqual(false);
  expect(topLayer.hasClass('sg-toplayer--splash-screen')).toEqual(false);
  expect(topLayer.hasClass('sg-toplayer--limited-width')).toEqual(false);
  expect(topLayer.hasClass('sg-toplayer--row')).toEqual(false);
});

test('testing wrapper', () => {
  const topLayer = shallow(<TopLayer>some text</TopLayer>);

  expect(topLayer.find('.sg-toplayer__wrapper')).toHaveLength(1);
});

test('testing wrapper without padding', () => {
  const topLayer = shallow(<TopLayer noPadding>some text</TopLayer>);

  expect(
    topLayer
      .find('.sg-toplayer__wrapper')
      .hasClass('sg-toplayer__wrapper--no-padding')
  ).toEqual(true);
});
