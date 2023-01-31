import * as React from 'react';
import CardHole from './CardHole';
import {render} from '@testing-library/react';

describe('<CardHole />', () => {
  test('render', () => {
    const cardHole = render(<CardHole>some text</CardHole>);

    expect(cardHole.hasClass('sg-card__hole')).toEqual(true);
  });
  test('colors', () => {
    const color = 'gray-50';
    const cardHole = render(<CardHole color={color}>some text</CardHole>);

    expect(cardHole.hasClass(`sg-card__hole--${color}`)).toEqual(true);
  });
});
