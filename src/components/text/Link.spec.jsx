import React from 'react';
import Link from './Link';
import Text from './Text';
import {TEXT_SIZE, TEXT_COLOR} from './textConsts';
import {shallow} from 'enzyme';

test('render', () => {
  const link = shallow(
    <Link href="test.com">Test</Link>
  );

  expect(link.hasClass('sg-text--link')).toBeTruthy();
  expect(link.props().href).toEqual('test.com');
});

test('render Text', () => {
  const link = shallow(
    <Link href="test.com">Test</Link>
  );

  expect(link.find(Text)).toBeTruthy();
});

test('empty href', () => {
  const link = shallow(
    <Link>Test</Link>
  ).dive();

  expect(link.find('span')).toHaveLength(1);
});

test('size', () => {
  const link = shallow(
    <Link size={TEXT_SIZE.SMALL}>Test</Link>
  ).dive();

  expect(link.hasClass('sg-text--small')).toBeTruthy();
});

test('color', () => {
  const link = shallow(
    <Link color={TEXT_COLOR.WHITE}>Test</Link>
  ).dive();

  expect(link.hasClass('sg-text--white')).toBeTruthy();
});

test('unstyled', () => {
  const link = shallow(
    <Link underlined>Test</Link>
  );

  expect(link.hasClass('sg-text--link-underlined')).toBeTruthy();
});
