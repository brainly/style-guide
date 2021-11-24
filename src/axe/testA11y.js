import axe from './axeSetup';
import {mount, ReactWrapper} from 'enzyme';

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
 *    const wrapper = mount(<MyComponent />);
 *    await testA11y(wrapper, options);
 *    document.dispatchEvent(new KeyboardEvent('keyup', {key: 'Escape'}));
 *    await testA11y(wrapper, options);
 *  });
 * ```
 */

export default async function testA11y(node, axeOptions) {
  const wrapper = node instanceof ReactWrapper ? node : mount(node);
  const results = await axe(wrapper.getDOMNode(), axeOptions);

  expect(results).toHaveNoViolations();
}
