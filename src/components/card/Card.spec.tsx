import * as React from 'react';
import Card, {CARD_PADDING} from './Card';
import CardHole from './CardHole';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';

describe('Card', () => {
  it('render', () => {
    const card = render(
      <Card>
        <CardHole color="gray-40">This is card top</CardHole>
        <CardHole color="gray-50">This is card bottom</CardHole>
      </Card>
    );

    expect(card.getByText('This is card top')).toBeTruthy();
    expect(card.getByText('This is card bottom')).toBeTruthy();
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(<Card>item</Card>);
    });
  });
});
