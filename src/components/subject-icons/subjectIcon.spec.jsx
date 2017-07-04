import React from 'react';
import SubjectIcon, {types} from './SubjectIcon';
import {shallow} from 'enzyme';

test('render', () => {
  const icon = shallow(
    <SubjectIcon type={types.accountancy}/>
  );

  expect(icon.hasClass('sg-subject-icon')).toEqual(true);
  expect(icon.find('use')).toHaveLength(1);
});

test('error when no type', () => {
  const spy = jest.spyOn(console, 'error');

  console.error = jest.fn();
  shallow(<SubjectIcon/>);
  expect(console.error.mock.calls).toHaveLength(1);

  spy.mockRestore();
});

test('type passed to xlink:href', () => {
  const type = types.accountancy;
  const icon = shallow(
    <SubjectIcon type={type}/>
  );
  const use = icon.find('use');

  expect(use.props().xlinkHref).toEqual('#icon-subject-' + type);
});

