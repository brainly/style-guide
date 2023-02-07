import * as React from 'react';
import Breadcrumb from './Breadcrumb';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';

const elements = ['Coments (9)', 'Report', 'Follow'];

describe('Breadcrumb', () => {
  test('render', () => {
    const breadcrumb = render(<Breadcrumb elements={elements} />);
    const root = breadcrumb.container.firstElementChild;

    expect(root.classList.contains('sg-breadcrumb-list')).toEqual(true);
    expect(breadcrumb.getAllByRole('listitem')).toHaveLength(elements.length);
  });

  test('short', () => {
    const breadcrumb = render(<Breadcrumb elements={elements} short />);
    const root = breadcrumb.container.firstElementChild;

    expect(root.classList.contains('sg-breadcrumb-list--short')).toEqual(true);
  });

  test('adaptive', () => {
    const breadcrumb = render(<Breadcrumb elements={elements} adaptive />);
    const root = breadcrumb.container.firstElementChild;

    expect(root.classList.contains('sg-breadcrumb-list--adaptive')).toEqual(
      true
    );
  });

  it('should have no a11y violations', async () => {
    await testA11y(<Breadcrumb />);
  });
});
