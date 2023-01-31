import * as React from 'react';
import Card, {CARD_PADDING} from './Card';
import CardHole from './CardHole';
import {render} from '@testing-library/react';

describe('Card', () => {
  test('render', () => {
    const card = render(
      <Card>
        <CardHole color="gray-40">This is card top</CardHole>
        <CardHole color="gray-50">This is card bottom</CardHole>
      </Card>
    );
    const root = card.container.firstElementChild;

    expect(root.classList.contains('sg-card')).toEqual(true);
  });

  test('full', () => {
    const card = render(
      <Card full>
        <CardHole color="gray-40">This is card top</CardHole>
        <CardHole color="gray-50">This is card bottom</CardHole>
      </Card>
    );
    const root = card.container.firstElementChild;

    expect(root.classList.contains('sg-card--full')).toEqual(true);
  });

  test('vertical', () => {
    const card = render(
      <Card vertical>
        <CardHole color="gray-40">This is card top</CardHole>
        <CardHole color="gray-50">This is card bottom</CardHole>
      </Card>
    );
    const root = card.container.firstElementChild;

    expect(root.classList.contains('sg-card--vertical')).toEqual(true);
  });

  test('centered', () => {
    const card = render(
      <Card centered>
        <CardHole color="gray-40">This is card top</CardHole>
        <CardHole color="gray-50">This is card bottom</CardHole>
      </Card>
    );
    const root = card.container.firstElementChild;

    expect(root.classList.contains('sg-card--centered')).toEqual(true);
  });

  test('small padding', () => {
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

  test('large padding', () => {
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
});
