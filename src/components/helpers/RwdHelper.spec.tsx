import * as React from 'react';
import RwdHelper, {TYPE} from './RwdHelper';
import {render} from '@testing-library/react';

it('render element', () => {
  const rwdHelper = render(
    <RwdHelper hide={TYPE.SMALL_ONLY}>
      <button>button</button>
    </RwdHelper>
  );

  expect(rwdHelper.getByRole('button')).toBeTruthy();
});

it('custom className', () => {
  const rwdHelper = render(
    <RwdHelper hide={TYPE.SMALL_ONLY}>
      <div className="test">inside div</div>
    </RwdHelper>
  );

  expect(rwdHelper.getByText('inside div')).toBeTruthy();
});
