import React from 'react';
import SpinnerContainer from './SpinnerContainer';
import {shallow} from 'enzyme';

test('render', () => {
  const container = shallow(
    <SpinnerContainer>children</SpinnerContainer>
  );

  expect(container.hasClass('sg-spinner-container')).toEqual(true);
});
