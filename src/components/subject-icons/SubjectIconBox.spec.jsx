import React from 'react';
import SubjectIconBox from './SubjectIconBox';
import SubjectIcon, {TYPE} from './SubjectIcon';
import {shallow} from 'enzyme';

test('render', () => {
  const box = shallow(
    <SubjectIconBox>
      <SubjectIcon type={TYPE.LIFE_SCIENCE}/>
    </SubjectIconBox>
  );

  expect(box.hasClass('sg-subject-icon-box')).toEqual(true);
  expect(box.find(SubjectIcon)).toHaveLength(1);
});

test('darker', () => {
  const box = shallow(
    <SubjectIconBox darker={true}>
      <SubjectIcon type={TYPE.LIFE_SCIENCE}/>
    </SubjectIconBox>
  );

  expect(box.hasClass('sg-subject-icon-box--darker')).toEqual(true);
});

test('error when no child', () => {
  const spy = jest.spyOn(console, 'error');

  console.error = jest.fn();
  shallow(<SubjectIconBox/>);
  expect(console.error.mock.calls).toHaveLength(1);

  spy.mockRestore();
});

test('error when more than 1 child', () => {
  const spy = jest.spyOn(console, 'error');

  console.error = jest.fn();
  shallow(<SubjectIconBox>
    <SubjectIcon type={TYPE.LIFE_SCIENCE}/>
    <SubjectIcon type={TYPE.LIFE_SCIENCE}/>
  </SubjectIconBox>);
  expect(console.error.mock.calls).toHaveLength(1);

  spy.mockRestore();
});
