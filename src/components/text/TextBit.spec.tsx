import * as React from 'react';
import TextBit, {TEXT_BIT_TYPE, TEXT_BIT_SIZE} from './TextBit';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';

describe('TextBit', () => {
  it('render', () => {
    const textBit = render(<TextBit type={TEXT_BIT_TYPE.H1}>Test</TextBit>);

    expect(textBit.getByRole('heading')).toBeTruthy();
  });

  it('size', () => {
    const textBit = render(<TextBit size={TEXT_BIT_SIZE.XLARGE}>Test</TextBit>);

    expect(
      textBit.container.firstElementChild.classList.contains(
        'sg-text-bit--xlarge'
      )
    ).toBeTruthy();
  });

  it('size is responsive prop', () => {
    const component = render(
      <TextBit size={[TEXT_BIT_SIZE.LARGE, TEXT_BIT_SIZE.XLARGE]}>Test</TextBit>
    );

    ['sg-text-bit--large', 'md:sg-text-bit--xlarge'].forEach(className => {
      expect(
        component.container.firstElementChild.classList.contains(className)
      ).toEqual(true);
    });
  });

  it('type', () => {
    const textBit = render(<TextBit type={TEXT_BIT_TYPE.H3}>Test</TextBit>);

    expect(textBit.getByRole('heading').tagName).toEqual('H3');
  });

  it('color', () => {
    const textBit = render(<TextBit color="text-blue-40">Test</TextBit>);

    expect(
      textBit.container.firstElementChild.classList.contains(
        'sg-text-bit--text-blue-40'
      )
    ).toBeTruthy();
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(<TextBit>Read more</TextBit>);
    });
  });
});
