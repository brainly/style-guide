import * as React from 'react';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';
import Sparks from './Sparks';

// mock all animations WAAPI so tests run correctly in jsdom environment (no window)
jest.mock('./animation', () => ({
  useAnimation: jest.fn(() => ({
    animation: {
      play: jest.fn(),
      cancel: jest.fn(),
    },
    animationRef: React.createRef(),
  })),
}));

describe('<Sparks />', () => {
  it('renders correctly with default props', () => {
    const sparks = render(<Sparks />);

    expect(sparks.getByTestId('sparks')).toBeTruthy();
  });

  it('has no a11y violations', async () => {
    const {container} = render(<Sparks />);

    await testA11y(container);
  });
});
