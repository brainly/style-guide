import React from 'react';
import Badge, {COLOR, SIZE} from './Badge';
import Text, {SIZE as TEXT_SIZE, COLOR as TEXT_COLOR} from '../text/Text';
import {shallow, mount} from 'enzyme';

test('render', () => {
  const badge = shallow(
    <Badge>Test</Badge>
  );
  const text = badge.find(Text);

  expect(text).toHaveLength(1);
  expect(badge.hasClass('sg-badge')).toEqual(true);
});

test('default size', () => {
  const badge = mount(
    <Badge>Test</Badge>
  );
  const text = badge.find(Text);

  expect(text.props().size).toEqual(TEXT_SIZE.XSMALL);
  expect(badge.hasClass('sg-badge--small')).toEqual(false);
  expect(badge.hasClass('sg-badge--large')).toEqual(false);
});

test('small size', () => {
  const badge = shallow(
    <Badge size={SIZE.SMALL}>Test</Badge>
  );
  const text = badge.find(Text);

  expect(text.props().size).toEqual(TEXT_SIZE.XSMALL);
  expect(badge.hasClass('sg-badge--small')).toEqual(true);
});

test('larger size', () => {
  const badge = shallow(
    <Badge size={SIZE.LARGE}>Test</Badge>
  );
  const text = badge.find(Text);

  expect(text.props().size).toEqual(TEXT_SIZE.NORMAL);
  expect(badge.hasClass('sg-badge--large')).toEqual(true);
});

test('color', () => {
  const badge = mount(
    <Badge color={COLOR.MINT_SECONDARY}>Test</Badge>
  );
  const text = badge.find(Text);

  expect(badge.hasClass('sg-badge--mint-secondary')).toEqual(true);
  expect(text.props().color).toEqual(TEXT_COLOR.LIGHT);
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

test('error when passing a react element as a child', () => {
  const spy = jest.spyOn(console, 'error');

  console.error = jest.fn();
  shallow(<Badge><div>asd</div></Badge>);
  expect(console.error.mock.calls).toHaveLength(1);

  spy.mockRestore();
});
