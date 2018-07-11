import React from 'react';
import Spinner from './Spinner';
import {shallow} from 'enzyme';

test('render', () => {
  const component = shallow(<Spinner />);

  expect(component).toHaveLength(1);
  expect(component.is('.sg-spinner')).toEqual(true);
});

test('gray', () => {
  const component = shallow(<Spinner gray />);

  expect(component).toHaveLength(1);
  expect(component.is('.sg-spinner--gray')).toEqual(true);
});

test('className', () => {
  const testclass = 'mati-love-4-ever';
  const component = shallow(<Spinner className={testclass} />);

  expect(component).toHaveLength(1);
  expect(component.is(`.${testclass}`)).toEqual(true);
});
