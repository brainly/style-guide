import React from 'react';
import FooterLine from './FooterLine';
import {shallow} from 'enzyme';

test('render', () => {
  const header = shallow(
    <FooterLine>some text</FooterLine>
  );

  expect(header.hasClass('sg-footer__line')).toEqual(true);
});

test('error when no child', () => {
  const spy = jest.spyOn(console, 'error');

  console.error = jest.fn();
  shallow(<FooterLine />);
  expect(console.error.mock.calls).toHaveLength(1);

  spy.mockRestore();
});
