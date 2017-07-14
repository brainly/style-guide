import React from 'react';
import Logo, {TYPE} from './Logo';
import {shallow} from 'enzyme';

test('render', () => {
  const logo = shallow(
    <Logo/>
  );

  expect(logo.hasClass('sg-logo')).toEqual(true);
  expect(logo.find('img')).toHaveLength(1);
});

test('type', () => {
  const logo = shallow(
    <Logo type={TYPE.ZNANIJA}/>
  );

  expect(logo.hasClass('sg-logo--znanija')).toEqual(true);
});
