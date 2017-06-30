import React from 'react';
import TopLayer, {sizes} from './TopLayer';
import {shallow} from 'enzyme';

test('render', () => {
  const topLayer = shallow(
    <TopLayer>some text</TopLayer>
  );

  expect(topLayer.hasClass('sg-toplayer')).toEqual(true);
});

test('error when no children', () => {
  const spy = jest.spyOn(console, 'error');

  console.error = jest.fn();
  shallow(
    <TopLayer></TopLayer>
  );
  expect(console.error.mock.calls).toHaveLength(1);

  spy.mockRestore();
});

test('default size', () => {
  const topLayer = shallow(
    <TopLayer>some text</TopLayer>
  );

  Object.values(sizes).forEach(size => {
    expect(topLayer.hasClass(`sg-toplayer--${size}`)).toEqual(false);
  });
});

test('size', () => {
  const size = sizes.small;
  const topLayer = shallow(
    <TopLayer size={size}>some text</TopLayer>
  );

  expect(topLayer.hasClass(`sg-toplayer--${size}`)).toEqual(true);
});


test('testing modifications - all on', () => {
  const topLayer = shallow(
    <TopLayer fill={true} lead={true} limitedWidth={true} modal={true} row={true} smallSpaced={true} splashScreen={true}
      withBugbox={true}>
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
  const topLayer = shallow(
    <TopLayer>some text</TopLayer>
  );

  expect(topLayer.hasClass('sg-toplayer--lead')).toEqual(false);
  expect(topLayer.hasClass('sg-toplayer--fill')).toEqual(false);
  expect(topLayer.hasClass('sg-toplayer--modal')).toEqual(false);
  expect(topLayer.hasClass('sg-toplayer--with-bugbox')).toEqual(false);
  expect(topLayer.hasClass('sg-toplayer--small-spaced')).toEqual(false);
  expect(topLayer.hasClass('sg-toplayer--splash-screen')).toEqual(false);
  expect(topLayer.hasClass('sg-toplayer--limited-width')).toEqual(false);
  expect(topLayer.hasClass('sg-toplayer--row')).toEqual(false);
});
