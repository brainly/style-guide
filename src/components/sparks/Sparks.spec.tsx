import * as React from 'react';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';
import Sparks from './Sparks';

// mock all animations WAAPI so tests run correctly in jsdom environment (no window)
jest.mock('./animation', () => {
  return {
    useAnimation: jest.fn(() => ({
      register: jest.fn(),
      phase: 'initial',
      setPhase: jest.fn(),
    })),
  };
});

describe('<Sparks />', () => {
  it('renders around together with html element wrapped by it', () => {
    const sparks = render(
      <Sparks>
        <button type="button">Click me</button>
      </Sparks>
    );

    expect(sparks.container.firstChild).toBeTruthy();
    expect(sparks.getByRole('button', {name: /click me/i})).toBeTruthy();
  });

  it('has no a11y violations', async () => {
    const {container} = render(<Sparks />);

    await testA11y(container);
  });
});
