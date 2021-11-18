import axe from './axeSetup';
import {mount, ReactWrapper} from 'enzyme';

/**
 * Wrapper for jest-axe
 *
 * @example
 * ```jsx
 *  it('should have no a11y violations', async () => {
 *    await testA11Y(<MyComponent />, options);
 *  });
 * ```
 */

export default async function testA11y(node, axeOptions) {
  const wrapper = node instanceof ReactWrapper ? node : mount(node);
  const results = await axe(wrapper.getDOMNode(), axeOptions);

  expect(results).toHaveNoViolations();
}
