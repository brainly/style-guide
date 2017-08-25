import React from 'react';
import Footer from './Footer';
import {shallow} from 'enzyme';

test('render', () => {
  const header = shallow(
    <Footer>some text</Footer>
  );

  expect(header.hasClass('sg-footer')).toEqual(true);
});

test('error when no child', () => {
  const spy = jest.spyOn(console, 'error');

  console.error = jest.fn();
  shallow(<Footer />);
  expect(console.error.mock.calls).toHaveLength(1);

  spy.mockRestore();
});
