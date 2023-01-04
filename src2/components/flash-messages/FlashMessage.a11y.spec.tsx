import * as React from 'react';
import {render} from '@testing-library/react';
import FlashMessage from './FlashMessage';
import {testA11y} from '../../axe';
describe('FlashMessage', () => {
  it('should have "alert" role', () => {
    const flashMessage = render(<FlashMessage>message</FlashMessage>);
    expect(flashMessage.getByRole('alert')).toBeTruthy();
  });
});
describe('FlashMessage a11y', () => {
  it('should have no a11y violations', async () => {
    await testA11y(<FlashMessage>message</FlashMessage>);
  });
});