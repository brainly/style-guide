import * as React from 'react';
import {testA11y} from '../../axe';
import Header from './Header';

describe('Header a11y', () => {
  it('should have no a11y violations', async () => {
    await testA11y(<Header>item</Header>);
  });
});
