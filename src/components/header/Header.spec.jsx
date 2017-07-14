import React from 'react';
import Header from './Header';
import {shallow} from 'enzyme';

test('render', () => {
  const header = shallow(
    <Header>some text</Header>
  );

  expect(header.hasClass('sg-header')).toEqual(true);
  expect(header.find('div.sg-header__left')).toHaveLength(1);
  expect(header.find('div.sg-header__middle')).toHaveLength(1);
  expect(header.find('div.sg-header__right')).toHaveLength(1);
});

test('light', () => {
  const header = shallow(
    <Header light={true}>some text</Header>
  );

  expect(header.hasClass('sg-header--light')).toEqual(true);
});

test('fixed', () => {
  const header = shallow(
    <Header fixed={true}>some text</Header>
  );

  expect(header.hasClass('sg-header--fixed')).toEqual(true);
});


