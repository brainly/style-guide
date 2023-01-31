import * as React from 'react';
import RwdHelper, {TYPE} from './RwdHelper';
import {render} from '@testing-library/react';

test('render element', () => {
  const rwdHelper = render(
    <RwdHelper hide={TYPE.SMALL_ONLY}>
      <button>button</button>
    </RwdHelper>
  );

  expect(rwdHelper.queryByRole('button')).toBeTruthy();
});

test('custom className', () => {
  const rwdHelper = render(
    <RwdHelper hide={TYPE.SMALL_ONLY}>
      <div className="test">inside div</div>
    </RwdHelper>
  );

  expect(rwdHelper.container.firstElementChild.classList.contains('test')).toBe(
    true
  );
});
