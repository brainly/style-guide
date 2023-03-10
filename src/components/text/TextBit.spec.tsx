import * as React from 'react';
import TextBit, {TEXT_BIT_AS} from './TextBit';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';

describe('TextBit', () => {
  it('render', () => {
    const textBit = render(<TextBit as={TEXT_BIT_AS.H1}>Test</TextBit>);

    expect(textBit.getByRole('heading')).toBeTruthy();
  });

  it('type', () => {
    const textBit = render(<TextBit as={TEXT_BIT_AS.H3}>Test</TextBit>);

    expect(textBit.getByRole('heading').tagName).toEqual('H3');
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(<TextBit>Read more</TextBit>);
    });
  });
});
