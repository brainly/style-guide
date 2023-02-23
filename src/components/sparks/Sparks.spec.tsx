import * as React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
  it('renders correctly and displays its children', () => {
    const sparks = render(
      <Sparks>
        <button type="button">Click me</button>
      </Sparks>
    );

    expect(sparks.container.firstChild).toBeTruthy();
    expect(sparks.getByRole('button', {name: /click me/i})).toBeTruthy();
  });

  it('renders around interactive element and this element still captures all the events', () => {
    const onClick = jest.fn();
    const sparks = render(
      <Sparks>
        <button type="button" onClick={onClick}>
          Click me
        </button>
      </Sparks>
    );

    const button = sparks.getByRole('button', {name: /click me/i});

    userEvent.click(button);

    expect(onClick).not.toHaveBeenCalled();
  });

  it('has no a11y violations', async () => {
    const {container} = render(<Sparks />);

    await testA11y(container);
  });
});
