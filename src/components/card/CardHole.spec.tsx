import * as React from 'react';
import CardHole from './CardHole';
import {render} from '@testing-library/react';

describe('<CardHole />', () => {
  it('render', () => {
    const cardHole = render(<CardHole>some text</CardHole>);

    expect(
      cardHole.container.firstElementChild.classList.contains('sg-card__hole')
    ).toEqual(true);
  });
  it('colors', () => {
    const color = 'gray-50';
    const cardHole = render(<CardHole color={color}>some text</CardHole>);

    expect(
      cardHole.container.firstElementChild.classList.contains(
        `sg-card__hole--${color}`
      )
    ).toEqual(true);
  });
});
