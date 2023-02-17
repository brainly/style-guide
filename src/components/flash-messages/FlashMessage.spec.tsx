import * as React from 'react';
import FlashMessage from './FlashMessage';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';

describe('FlashMessage', () => {
  it('render', () => {
    const flashMessage = render(<FlashMessage text="foo" />);

    expect(flashMessage.queryByText('foo')).toBeTruthy();
  });

  it('should have "alert" role', () => {
    const flashMessage = render(<FlashMessage text="message" />);

    expect(flashMessage.getByRole('alert')).toBeTruthy();
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(<FlashMessage text="message" />);
    });
  });
});
