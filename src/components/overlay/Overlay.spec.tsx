import * as React from 'react';
import Overlay from './Overlay';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';

describe('Overlay a11y', () => {
  it('render', () => {
    const overlay = render(<Overlay />);

    expect(
      overlay.container.firstElementChild.classList.contains('sg-overlay')
    ).toBeTruthy();
  });

  it('children', () => {
    const overlay = render(
      <Overlay>
        <div>foo</div>
      </Overlay>
    );

    expect(overlay.queryByText('foo')).toBeTruthy();
  });

  it('partial', () => {
    const overlay = render(<Overlay partial />);

    expect(
      overlay.container.firstElementChild.classList.contains(
        'sg-overlay--partial'
      )
    ).toBe(true);
  });

  it('colors', () => {
    const overlay = render(<Overlay color="black" />);

    expect(
      overlay.container.firstElementChild.classList.contains(
        'sg-overlay--black'
      )
    ).toBe(true);
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(<Overlay>item</Overlay>);
    });
  });
});
