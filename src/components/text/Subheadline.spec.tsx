import * as React from 'react';
import Subheadline from './Subheadline';
import {render} from '@testing-library/react';
import {SUBHEADLINE_AS} from './subheadlineConsts';
import {testA11y} from '../../axe';

describe('Subheadline', () => {
  it('render', () => {
    const subheadline = render(<Subheadline>Test</Subheadline>);

    expect(subheadline.getByRole('heading')).toBeTruthy();
  });

  it('type', () => {
    const headline = render(
      <Subheadline as={SUBHEADLINE_AS.H3}>Test</Subheadline>
    );

    expect(headline.getByRole('heading').tagName).toEqual('H3');
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(<Subheadline>Read more</Subheadline>);
    });
  });
});
