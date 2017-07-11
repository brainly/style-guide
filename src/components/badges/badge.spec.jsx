import React from 'react';
import Badge, {COLOR, SIZE} from './Badge';
import Text from '../text/Text';
import {shallow, mount} from 'enzyme';

test('render', () => {
  const badge = shallow(
    <Badge>Test</Badge>
  );

  expect(badge.hasClass('sg-badge')).toEqual(true);
});

test('size', () => {
  const badge = shallow(
    <Badge size={SIZE.SMALL}>Test</Badge>
  );

  expect(badge.hasClass('sg-badge--small')).toEqual(true);
});

test('default font size', () => {
  const badge = mount(
    <Badge>Test</Badge>
  );
  const text = badge.find(Text);

  expect(text.hasClass('sg-text--xsmall')).toEqual(true);
});

test('larger font size', () => {
  const badge = mount(
    <Badge size={SIZE.LARGE}>Test</Badge>
  );
  const text = badge.find(Text);

  expect(text.hasClass('sg-text--xsmall')).toEqual(false);
});

test('color', () => {
  const badge = mount(
    <Badge color={COLOR.MINT_SECONDARY}>Test</Badge>
  );
  const text = badge.find(Text);

  expect(badge.hasClass('sg-badge--mint-secondary')).toEqual(true);
  expect(text.hasClass('sg-text--light')).toEqual(true);
});

test('animation', () => {
  const badge = shallow(
    <Badge withAnimation={true}>Test</Badge>
  );

  expect(badge.hasClass('sg-badge--with-animation')).toEqual(true);
});

test('rounded', () => {
  const badge = shallow(
    <Badge rounded={true}>Test</Badge>
  );

  expect(badge.hasClass('sg-badge--rounded')).toEqual(true);
});

test('error when no child', () => {
  const spy = jest.spyOn(console, 'error');

  console.error = jest.fn();
  shallow(<Badge/>);
  expect(console.error.mock.calls).toHaveLength(1);

  spy.mockRestore();
});
