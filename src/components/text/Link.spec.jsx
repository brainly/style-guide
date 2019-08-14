import React from 'react';
import Link, {LINK_SIZE, LINK_COLOR} from './Link';
import Text from './Text';
import {shallow} from 'enzyme';

test('render', () => {
  const link = shallow(<Link href="test.com">Test</Link>);

  expect(link.hasClass('sg-text--link')).toBeTruthy();
  expect(link.props().href).toEqual('test.com');
});

test('render Text', () => {
  const link = shallow(<Link href="test.com">Test</Link>);

  expect(link.find(Text)).toBeTruthy();
});

test('empty href', () => {
  const link = shallow(<Link>Test</Link>).dive();

  expect(link.find('span')).toHaveLength(1);
});

test('size', () => {
  const link = shallow(<Link size={LINK_SIZE.SMALL}>Test</Link>).dive();

  expect(link.hasClass('sg-text--small')).toBeTruthy();
});

test('color', () => {
  const link = shallow(<Link color={LINK_COLOR.WHITE}>Test</Link>).dive();

  expect(link.hasClass('sg-text--white')).toBeTruthy();
});

test('unstyled', () => {
  const link = shallow(<Link unstyled>Test</Link>);

  expect(link.hasClass('sg-text--link-unstyled')).toBeTruthy();
  expect(link.hasClass('sg-text--link')).toBeFalsy();
});

test('underlined', () => {
  const link = shallow(<Link underlined>Test</Link>);

  expect(link.hasClass('sg-text--link-underlined')).toBeTruthy();
  expect(link.hasClass('sg-text--link-unstyled')).toBeFalsy();
  expect(link.hasClass('sg-text--link')).toBeFalsy();
});
