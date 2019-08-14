import React from 'react';
import FooterLine from './FooterLine';
import {shallow} from 'enzyme';

test('render', () => {
  const header = shallow(<FooterLine>some text</FooterLine>);

  expect(header.hasClass('sg-footer__line')).toEqual(true);
});
