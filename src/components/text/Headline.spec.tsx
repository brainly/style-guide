import * as React from 'react';
import Headline, {HEADLINE_AS} from './Headline';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';

describe('Headline', () => {
  it('render', () => {
    const headline = render(<Headline>Test</Headline>);

    expect(headline.getByRole('heading')).toBeTruthy();
  });

  it('type', () => {
    const headline = render(<Headline as={HEADLINE_AS.H3}>Test</Headline>);

    expect(headline.getByRole('heading').tagName).toEqual('H3');
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(<Headline>Read more</Headline>);
    });
  });
});
