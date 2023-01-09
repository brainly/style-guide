import * as React from 'react';
import {testA11y} from '../../axe';
import Layout from './Layout';
describe('Layout a11y', () => {
  it('should have no a11y violations', async () => {
    await testA11y(<Layout>item</Layout>);
  });
});
