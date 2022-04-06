import * as React from 'react';
import {testA11y} from '../../axe';
import Text from './Text';

describe('Text a11y', () => {
  it('should have no a11y violations', async () => {
    await testA11y(<Text>Read more</Text>);
  });
});
