import * as React from 'react';
import {testA11y} from '../../axe';
import Card from './Card';

describe('Card a11y', () => {
  it('should have no a11y violations', async () => {
    await testA11y(<Card>item</Card>);
  });
});
