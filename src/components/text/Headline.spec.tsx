import * as React from 'react';
import Headline, {
  HEADLINE_SIZE,
  HEADLINE_TYPE,
  HEADLINE_TRANSFORM,
  HEADLINE_ALIGN,
} from './Headline';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';

describe('Headline', () => {
  it('render', () => {
    const headline = render(<Headline>Test</Headline>);

    expect(headline.getByRole('heading')).toBeTruthy();
  });

  it('size is responsive prop', () => {
    const component = render(
      <Headline
        size={[
          HEADLINE_SIZE.SMALL,
          HEADLINE_SIZE.XXLARGE,
          null,
          HEADLINE_SIZE.XXXLARGE,
        ]}
      >
        Test
      </Headline>
    );

    [
      'sg-headline--small',
      'md:sg-headline--xxlarge',
      'xl:sg-headline--xxxlarge',
    ].forEach(className => {
      expect(
        component.container.firstElementChild.classList.contains(className)
      ).toEqual(true);
    });
  });

  it('type', () => {
    const headline = render(<Headline type={HEADLINE_TYPE.H3}>Test</Headline>);

    expect(headline.getByRole('heading').tagName).toEqual('H3');
  });

  it('transform is responsive prop', () => {
    const component = render(
      <Headline
        transform={[
          HEADLINE_TRANSFORM.UPPERCASE,
          HEADLINE_TRANSFORM.LOWERCASE,
          null,
          HEADLINE_TRANSFORM.CAPITALIZE,
        ]}
      >
        Test
      </Headline>
    );

    [
      'sg-headline--uppercase',
      'md:sg-headline--lowercase',
      'xl:sg-headline--capitalize',
    ].forEach(className => {
      expect(
        component.container.firstElementChild.classList.contains(className)
      ).toEqual(true);
    });
  });

  it('extraBold is responsive prop', () => {
    const component = render(
      <Headline extraBold={[true, false, null, true]}>Test</Headline>
    );

    [
      'sg-headline--extra-bold',
      'md:sg-headline--no-bold',
      'xl:sg-headline--extra-bold',
    ].forEach(className => {
      expect(
        component.container.firstElementChild.classList.contains(className)
      ).toEqual(true);
    });
  });

  it('align is responsive prop', () => {
    const component = render(
      <Headline
        align={[
          HEADLINE_ALIGN.LEFT,
          HEADLINE_ALIGN.RIGHT,
          null,
          HEADLINE_ALIGN.LEFT,
        ]}
      >
        Test
      </Headline>
    );

    [
      'sg-headline--to-left',
      'md:sg-headline--to-right',
      'xl:sg-headline--to-left',
    ].forEach(className => {
      expect(
        component.container.firstElementChild.classList.contains(className)
      ).toEqual(true);
    });
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(<Headline>Read more</Headline>);
    });
  });
});
