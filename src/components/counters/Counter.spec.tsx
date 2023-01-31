import * as React from 'react';
import Counter from './Counter';
import {render} from '@testing-library/react';

describe('<Counter />', () => {
  it('renders points icon inside the points counter', () => {
    const counter = render(
      <Counter icon="points" size="xxs">
        12
      </Counter>
    );

    expect(counter.getByRole('img')).toBeTruthy();
  });
});
