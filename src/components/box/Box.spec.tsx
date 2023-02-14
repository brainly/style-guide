import * as React from 'react';
import Box from './Box';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';

describe('Box', () => {
  it('render children', () => {
    const box = render(<Box>some text</Box>);

    expect(box.getByText('some text')).toBeTruthy();
  });

  it('shadow is responsive prop', () => {
    const box = render(<Box shadow={[true, false, null, true]}>box</Box>);
    const root = box.container.firstElementChild;

    ['sg-box--shadow', 'md:sg-box--no-shadow', 'xl:sg-box--shadow'].forEach(
      className => {
        expect(root.classList.contains(className)).toEqual(true);
      }
    );
  });

  it('noBorderRadius is responsive prop', () => {
    const component = render(
      <Box noBorderRadius={[false, true, null, false]}>box</Box>
    );
    const root = component.container.firstElementChild;

    [
      'sg-box--border-radius',
      'md:sg-box--no-border-radius',
      'xl:sg-box--border-radius',
    ].forEach(className => {
      expect(root.classList.contains(className)).toEqual(true);
    });
  });

  it('border is responsive prop', () => {
    const component = render(
      <Box border={[false, true, null, false]}>box</Box>
    );
    const root = component.container.firstElementChild;

    ['sg-box--no-border', 'md:sg-box--border', 'xl:sg-box--no-border'].forEach(
      className => {
        expect(root.classList.contains(className)).toEqual(true);
      }
    );
  });

  it('padding is responsive prop', () => {
    const component = render(<Box padding={['xs', null, 'm', 'xl']}>box</Box>);
    const root = component.container.firstElementChild;

    [
      'sg-box--padding-xs',
      'lg:sg-box--padding-m',
      'xl:sg-box--padding-xl',
    ].forEach(className => {
      expect(root.classList.contains(className)).toEqual(true);
    });
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(<Box>item</Box>);
    });
  });
});
