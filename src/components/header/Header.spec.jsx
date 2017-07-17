import React from 'react';
import Header from './Header';
import {shallow} from 'enzyme';

test('render', () => {
  const header = shallow(
    <Header>some text</Header>
  );

  expect(header.hasClass('sg-header')).toEqual(true);
});

test('error when no child', () => {
  const spy = jest.spyOn(console, 'error');

  console.error = jest.fn();
  shallow(<Header/>);
  expect(console.error.mock.calls).toHaveLength(1);

  spy.mockRestore();
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


