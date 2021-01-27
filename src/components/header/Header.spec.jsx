import * as React from 'react';
import Header from './Header';
import {shallow} from 'enzyme';

test('render', () => {
  const header = shallow(<Header>some text</Header>);

  expect(header.hasClass('sg-header')).toEqual(true);
});

test('fixed', () => {
  const header = shallow(<Header fixed>some text</Header>);

  expect(header.hasClass('sg-header--fixed')).toEqual(true);
});

test('withDivider', () => {
  const header = shallow(<Header withDivider>some text</Header>);

  expect(header.hasClass('sg-header--with-divider')).toEqual(true);
});
