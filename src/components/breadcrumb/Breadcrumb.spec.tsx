import * as React from 'react';
import Breadcrumb from './Breadcrumb';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';

const elements = ['Coments (9)', 'Report', 'Follow'];

describe('Breadcrumb', () => {
  it('render', () => {
    const breadcrumb = render(<Breadcrumb elements={elements} />);
    const root = breadcrumb.container.firstElementChild;

    expect(root.classList.contains('sg-breadcrumb-list')).toEqual(true);
    expect(breadcrumb.getAllByRole('listitem')).toHaveLength(elements.length);
  });

  it('short', () => {
    const breadcrumb = render(<Breadcrumb elements={elements} short />);
    const root = breadcrumb.container.firstElementChild;

    expect(root.classList.contains('sg-breadcrumb-list--short')).toEqual(true);
  });

  it('adaptive', () => {
    const breadcrumb = render(<Breadcrumb elements={elements} adaptive />);
    const root = breadcrumb.container.firstElementChild;

    expect(root.classList.contains('sg-breadcrumb-list--adaptive')).toEqual(
      true
    );
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(<Breadcrumb />);
    });
  });
});
