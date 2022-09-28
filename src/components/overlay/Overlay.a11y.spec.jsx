import * as React from 'react';
import {testA11y} from '../../axe';
import Overlay from './Overlay';

describe('Overlay a11y', () => {
  it('should have no a11y violations', async () => {
    await testA11y(<Overlay>item</Overlay>);
  });
});
