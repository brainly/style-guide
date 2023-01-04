import * as React from 'react';
import {testA11y} from '../../axe';
import Headline from './Headline';
describe('Headline a11y', () => {
  it('should have no a11y violations', async () => {
    await testA11y(<Headline>Read more</Headline>);
  });
});