import * as React from 'react';
import {testA11y} from '../../axe';
import Footer from './Footer';

describe('Footer a11y', () => {
  it('should have no a11y violations', async () => {
    await testA11y(<Footer>item</Footer>);
  });
});
