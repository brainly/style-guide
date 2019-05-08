import React from 'react';
import SubjectIconBox, {TYPE} from './SubjectIconBox';
import SubjectIcon from './SubjectIcon';
import {shallow} from 'enzyme';

test('render', () => {
  const box = shallow(
    <SubjectIconBox type={TYPE.LIFE_SCIENCE} />
  );

  expect(box.hasClass('sg-subject-icon-box')).toEqual(true);
  expect(box.find(SubjectIcon)).toHaveLength(1);
});

test('darker', () => {
  const box = shallow(
    <SubjectIconBox type={TYPE.LIFE_SCIENCE} darker />
  );

  expect(box.hasClass('sg-subject-icon-box--darker')).toEqual(true);
});
