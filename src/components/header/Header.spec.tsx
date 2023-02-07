import * as React from 'react';
import Header from './Header';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';

describe('Header', () => {
  test('render', () => {
    const header = render(<Header>some text</Header>);

    expect(
      header.container.firstElementChild.classList.contains('sg-header')
    ).toEqual(true);
  });
  test('fixed', () => {
    const header = render(<Header fixed>some text</Header>);

    expect(
      header.container.firstElementChild.classList.contains('sg-header--fixed')
    ).toEqual(true);
  });
  test('withDivider', () => {
    const header = render(<Header withDivider>some text</Header>);

    expect(
      header.container.firstElementChild.classList.contains(
        'sg-header--with-divider'
      )
    ).toEqual(true);
  });

  it('should have no a11y violations', async () => {
    await testA11y(<Header>item</Header>);
  });
});
