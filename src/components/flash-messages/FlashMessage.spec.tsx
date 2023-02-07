import * as React from 'react';
import FlashMessage, {TYPE} from './FlashMessage';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';

describe('FlashMessage', () => {
  test('render', () => {
    const flashMessage = render(<FlashMessage text="foo" />);

    expect(flashMessage.queryByText('foo')).toBeTruthy();
  });

  test('type', () => {
    const flashMessage = render(<FlashMessage text="test" type={TYPE.ERROR} />);

    expect(
      flashMessage.container.firstElementChild.firstElementChild.classList.contains(
        'sg-flash__message--error'
      )
    ).toEqual(true);
  });

  it('should have "alert" role', () => {
    const flashMessage = render(<FlashMessage text="message" />);

    expect(flashMessage.getByRole('alert')).toBeTruthy();
  });

  it('should have no a11y violations', async () => {
    await testA11y(<FlashMessage text="message" />);
  });
});
