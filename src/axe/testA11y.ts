import axe from './axeSetup';
import React from 'react';
import {render} from '@testing-library/react';
/**
 * Wrapper for jest-axe
 *
 * @example
 * ```jsx
 *  it('should have no a11y violations', async () => {
 *    await testA11y(<MyComponent />, options);
 *  });
 * ```
 *
 * ```jsx
 *  it('should have no a11y violations after Esc keyup', async () => {
 *    const onDismiss = jest.fn();
 *    const { container } = render(<MyComponent />);
 *    await testA11y(container, options);
 *    fireEvent.keyDown(container, { key: 'Esc' });
 *    await testA11y(container, options);
 *  });
 * ```
 */

// @ts-expect-error TS7006
export default async function testA11y(node, axeOptions?) {
  const container = React.isValidElement(node)
    ? render(node, axeOptions).container
    : node;
  const results = await axe(container, axeOptions);

  expect(results).toHaveNoViolations();
}
