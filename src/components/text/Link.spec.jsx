import React from 'react';
import Link, {COLOR as LINK_COLOR, SIZE as LINK_SIZE} from '../text/Link';
import {shallow} from 'enzyme';

test('render', () => {
  const link = shallow(
    <Link href="test.com">Test</Link>
  );

  expect(link.hasClass('sg-link')).toBeTruthy();
  expect(link.props().href).toEqual('test.com');
});

test('empty href', () => {
  const link = shallow(
    <Link>Test</Link>
  );

  expect(link.find('span')).toHaveLength(1);
  expect(link.hasClass('sg-link--disabled')).toBeTruthy();
});

test('size', () => {
  const link = shallow(
    <Link size={LINK_SIZE.OBSCURE}>Test</Link>
  );

  expect(link.hasClass('sg-link--obscure')).toBeTruthy();
});

test('color', () => {
  const link = shallow(
    <Link color={LINK_COLOR.LIGHT}>Test</Link>
  );

  expect(link.hasClass('sg-link--light')).toBeTruthy();
});

test('unstyled', () => {
  const link = shallow(
    <Link unstyled={true}>Test</Link>
  );

  expect(link.hasClass('sg-link--unstyled')).toBeTruthy();
});

test('underlined', () => {
  const link = shallow(
    <Link underlined={true}>Test</Link>
  );

  expect(link.hasClass('sg-link--underlined')).toBeTruthy();
});

test('emphasised', () => {
  const link = shallow(
    <Link emphasised={true}>Test</Link>
  );

  expect(link.hasClass('sg-link--emphasised')).toBeTruthy();
});

test('disabled', () => {
  const link = shallow(
    <Link disabled={true}>Test</Link>
  );

  expect(link.hasClass('sg-link--disabled')).toBeTruthy();
});
