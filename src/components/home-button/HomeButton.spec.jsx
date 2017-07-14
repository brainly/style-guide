import React from 'react';
import HomeButton, {TYPE} from './HomeButton';
import {shallow} from 'enzyme';

test('render', () => {
  const button = shallow(
    <HomeButton/>
  );

  expect(button.hasClass('sg-home-button')).toBeTruthy();
  expect(button.find('img')).toHaveLength(2);
  expect(button.find('a')).toHaveLength(1);
});

test('type', () => {
  const button = shallow(
    <HomeButton type={TYPE.EODEV}/>
  );

  expect(button.hasClass('sg-home-button--eodev')).toBeTruthy();
});

test('href', () => {
  const test = 'test';
  const button = shallow(
    <HomeButton href={test}/>
  );

  expect(button.props().href).toEqual(test);
});

test('empty href', () => {
  const button = shallow(
    <HomeButton>Test</HomeButton>
  );

  expect(button.props().href).toEqual('#');
});
