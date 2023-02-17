import * as React from 'react';
import SubjectIconBox, {TYPE} from './SubjectIconBox';
import {render} from '@testing-library/react';

it('render', () => {
  const box = render(<SubjectIconBox type={TYPE.LIFE_SCIENCE} />);

  expect(box.getByRole('img')).toBeTruthy();
});
