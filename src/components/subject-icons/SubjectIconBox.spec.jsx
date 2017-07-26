import React from 'react';
import SubjectIconBox, {TYPE} from './SubjectIconBox';
import SubjectIcon from './SubjectIcon';
import {shallow} from 'enzyme';


test('render', () => {
  const box = shallow(
    <SubjectIconBox type={TYPE.LIFE_SCIENCE}/>
  );

  expect(box.hasClass('sg-subject-icon-box')).toEqual(true);
  expect(box.find(SubjectIcon)).toHaveLength(1);
});

test('darker', () => {
  const box = shallow(
    <SubjectIconBox type={TYPE.LIFE_SCIENCE} darker={true}/>
  );

  expect(box.hasClass('sg-subject-icon-box--darker')).toEqual(true);
});

test('error when no type', () => {
  const spy = jest.spyOn(console, 'error');

  console.error = jest.fn();
  shallow(<SubjectIconBox/>);
  expect(console.error.mock.calls).toHaveLength(2);

  spy.mockRestore();
});
