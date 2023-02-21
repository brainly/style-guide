import * as React from 'react';
import Subheadline from './Subheadline';
import {render} from '@testing-library/react';
import {
  SUBHEADLINE_SIZE,
  SUBHEADLINE_TYPE,
  SUBHEADLINE_ALIGN,
  SUBHEADLINE_TRANSFORM,
} from './subheadlineConsts';
import {testA11y} from '../../axe';

describe('Subheadline', () => {
  it('render', () => {
    const subheadline = render(<Subheadline>Test</Subheadline>);

    expect(subheadline.getByRole('heading')).toBeTruthy();
  });

  it('size is responsive prop', () => {
    const component = render(
      <Subheadline
        size={[
          SUBHEADLINE_SIZE.SMALL,
          SUBHEADLINE_SIZE.XXLARGE,
          null,
          SUBHEADLINE_SIZE.XXXLARGE,
        ]}
      >
        Test
      </Subheadline>
    );

    [
      'sg-subheadline--small',
      'md:sg-subheadline--xxlarge',
      'xl:sg-subheadline--xxxlarge',
    ].forEach(className => {
      expect(
        component.container.firstElementChild.classList.contains(className)
      ).toEqual(true);
    });
  });

  it('type', () => {
    const headline = render(
      <Subheadline type={SUBHEADLINE_TYPE.H3}>Test</Subheadline>
    );

    expect(headline.getByRole('heading').tagName).toEqual('H3');
  });

  it('transform is responsive prop', () => {
    const component = render(
      <Subheadline
        transform={[
          SUBHEADLINE_TRANSFORM.UPPERCASE,
          SUBHEADLINE_TRANSFORM.LOWERCASE,
          null,
          SUBHEADLINE_TRANSFORM.CAPITALIZE,
        ]}
      >
        Test
      </Subheadline>
    );

    [
      'sg-subheadline--uppercase',
      'md:sg-subheadline--lowercase',
      'xl:sg-subheadline--capitalize',
    ].forEach(className => {
      expect(
        component.container.firstElementChild.classList.contains(className)
      ).toEqual(true);
    });
  });

  it('align is responsive prop', () => {
    const component = render(
      <Subheadline
        align={[
          SUBHEADLINE_ALIGN.LEFT,
          SUBHEADLINE_ALIGN.RIGHT,
          null,
          SUBHEADLINE_ALIGN.CENTER,
        ]}
      >
        Test
      </Subheadline>
    );

    [
      'sg-subheadline--to-left',
      'md:sg-subheadline--to-right',
      'xl:sg-subheadline--to-center',
    ].forEach(className => {
      expect(
        component.container.firstElementChild.classList.contains(className)
      ).toEqual(true);
    });
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(<Subheadline>Read more</Subheadline>);
    });
  });
});
