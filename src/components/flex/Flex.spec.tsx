import * as React from 'react';
import {render} from '@testing-library/react';
import Flex from './Flex';
import {testA11y} from '../../axe';

describe('Flex', () => {
  const children = <div>Text</div>;

  it('renders', () => {
    expect(() => render(<Flex>{children}</Flex>)).not.toThrow();
  });

  it('renders component with different html tag', () => {
    const component = render(
      <Flex as="ul">
        <div>test</div>
      </Flex>
    );

    expect(component.getByRole('list')).toBeTruthy();
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(
        <Flex>
          <div>item</div>
        </Flex>
      );
    });
  });
});
