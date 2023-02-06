import * as React from 'react';
import Layout from './Layout';
import LayoutContent from './LayoutContent';
import LayoutSecondaryContent from './LayoutSecondaryContent';
import LayoutAsideContent from './LayoutAsideContent';
import {render} from '@testing-library/react';

describe('Layout', () => {
  test('render with footer', () => {
    const footer = <div>Footer</div>;
    const layout = render(<Layout footer={footer}>Content</Layout>);

    expect(
      layout.container.firstElementChild.querySelector('.sg-layout__footer')
    ).toBeTruthy();
  });

  test('reserved-order', () => {
    const layout = render(<Layout reversedOrder>Content</Layout>);

    expect(
      layout.container.firstElementChild.querySelector(
        '.sg-layout__container--reversed-order'
      )
    ).toBeTruthy();
  });

  test('no-max-width', () => {
    const layout = render(<Layout noMaxWidth>Content</Layout>);

    expect(
      layout.container.firstElementChild.querySelector(
        '.sg-layout__container--no-max-width'
      )
    ).toBeTruthy();
  });

  test('no-margin-top', () => {
    const layout = render(<Layout noMarginTop>Content</Layout>);

    expect(
      layout.container.firstElementChild.querySelector(
        '.sg-layout__container--no-margin-top'
      )
    ).toBeTruthy();
  });

  test('full-page', () => {
    const layout = render(<Layout fullPage>Content</Layout>);

    expect(
      layout.container.firstElementChild.querySelector(
        '.sg-layout__container--full-page'
      )
    ).toBeTruthy();
  });
});

describe('LayoutContent', () => {
  test('render', () => {
    const layoutContent = render(<LayoutContent>Content</LayoutContent>);

    expect(
      layoutContent.container.firstElementChild.classList.contains(
        'sg-layout__content'
      )
    ).toEqual(true);
  });

  test('no-max-width', () => {
    const layoutContent = render(
      <LayoutContent noMaxWidth>Content</LayoutContent>
    );

    expect(
      layoutContent.container.firstElementChild.classList.contains(
        'sg-layout__content--no-max-width'
      )
    ).toEqual(true);
  });
});

describe('LayoutAsideContent', () => {
  test('render', () => {
    const layoutAsideContent = render(
      <LayoutAsideContent>Content</LayoutAsideContent>
    );

    expect(
      layoutAsideContent.container.firstElementChild.classList.contains(
        'sg-layout__aside-content'
      )
    ).toEqual(true);
  });
});

describe('LayoutSecondaryContent', () => {
  test('render', () => {
    const component = render(
      <LayoutSecondaryContent>Content</LayoutSecondaryContent>
    );

    expect(
      component.container.firstElementChild.classList.contains(
        'sg-layout__secondary-content'
      )
    ).toEqual(true);
  });
});
