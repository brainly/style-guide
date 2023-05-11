import * as React from 'react';
import CardHole from './CardHole';
import {render} from '@testing-library/react';

describe('<CardHole />', () => {
  it('render', () => {
    const cardHole = render(<CardHole>some text</CardHole>);

    expect(cardHole.getByText('some text')).toBeTruthy();
  });
});
