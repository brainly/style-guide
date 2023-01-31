import * as React from 'react';
import SubjectIconBox, {TYPE} from './SubjectIconBox';
import SubjectIcon from './SubjectIcon';
import {render} from '@testing-library/react';

test('render', () => {
  const box = render(<SubjectIconBox type={TYPE.LIFE_SCIENCE} />);

  expect(box.hasClass('sg-subject-icon-box')).toEqual(true);
  expect(box.find(SubjectIcon)).toHaveLength(1);
});
test('darker', () => {
  const box = render(<SubjectIconBox type={TYPE.LIFE_SCIENCE} darker />);

  expect(box.hasClass('sg-subject-icon-box--darker')).toEqual(true);
});
