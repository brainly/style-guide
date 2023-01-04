import * as React from 'react';
import {testA11y} from '../../axe';
import Box from './Box';
describe('Box a11y', () => {
  it('should have no a11y violations', async () => {
    await testA11y(<Box>item</Box>);
  });
});