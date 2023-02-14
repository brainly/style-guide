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

  it('full', () => {
    const card = render(
      <Card full>
        <CardHole color="gray-40">This is card top</CardHole>
        <CardHole color="gray-50">This is card bottom</CardHole>
      </Card>
    );
    const root = card.container.firstElementChild;

    expect(root.classList.contains('sg-card--full')).toEqual(true);
  });

  it('vertical', () => {
    const card = render(
      <Card vertical>
        <CardHole color="gray-40">This is card top</CardHole>
        <CardHole color="gray-50">This is card bottom</CardHole>
      </Card>
    );
    const root = card.container.firstElementChild;

    expect(root.classList.contains('sg-card--vertical')).toEqual(true);
  });

  it('centered', () => {
    const card = render(
      <Card centered>
        <CardHole color="gray-40">This is card top</CardHole>
        <CardHole color="gray-50">This is card bottom</CardHole>
      </Card>
    );
    const root = card.container.firstElementChild;

    expect(root.classList.contains('sg-card--centered')).toEqual(true);
  });

  it('small padding', () => {
    const padding = CARD_PADDING.SMALL;
    const card = render(
      <Card padding={padding}>
        <CardHole color="gray-40">This is card top</CardHole>
        <CardHole color="gray-50">This is card bottom</CardHole>
      </Card>
    );
    const root = card.container.firstElementChild;

    expect(root.classList.contains('sg-card--padding-small')).toEqual(true);
  });

  it('large padding', () => {
    const padding = CARD_PADDING.LARGE;
    const card = render(
      <Card padding={padding}>
        <CardHole color="gray-40">This is card top</CardHole>
        <CardHole color="gray-50">This is card bottom</CardHole>
      </Card>
    );
    const root = card.container.firstElementChild;

    expect(root.classList.contains('sg-card--padding-large')).toEqual(true);
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(<Card>item</Card>);
    });
  });
});
