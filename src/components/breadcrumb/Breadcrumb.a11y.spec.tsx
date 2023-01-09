import * as React from 'react';
import {testA11y} from '../../axe';
import Breadcrumb from './Breadcrumb';
describe('Breadcrumb a11y', () => {
  it('should have no a11y violations', async () => {
    await testA11y(<Breadcrumb />);
  });
});
