import * as React from 'react';
import Breadcrumb from './Breadcrumb';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';

const elements = ['Coments (9)', 'Report', 'Follow'];

describe('Breadcrumb', () => {
  it('render', () => {
    const breadcrumb = render(<Breadcrumb elements={elements} />);

    expect(breadcrumb.getAllByRole('listitem')).toHaveLength(elements.length);
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(<Breadcrumb />);
    });
  });
});
