import * as React from 'react';
import SubjectIconBox, {TYPE} from './SubjectIconBox';
import {render} from '@testing-library/react';

it('render', () => {
  const box = render(<SubjectIconBox type={TYPE.LIFE_SCIENCE} />);

  expect(
    box.container.firstElementChild.classList.contains('sg-subject-icon-box')
  ).toEqual(true);
  expect(box.getByRole('img')).toBeTruthy();
});

it('darker', () => {
  const box = render(<SubjectIconBox type={TYPE.LIFE_SCIENCE} darker />);

  expect(
    box.container.firstElementChild.classList.contains(
      'sg-subject-icon-box--darker'
    )
  ).toEqual(true);
});
