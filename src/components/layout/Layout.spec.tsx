import * as React from 'react';
import Layout from './Layout';
import LayoutContent from './LayoutContent';
import LayoutSecondaryContent from './LayoutSecondaryContent';
import LayoutAsideContent from './LayoutAsideContent';
import {render} from '@testing-library/react';
import {testA11y} from '../../axe';

describe('Layout', () => {
  it('render with footer', () => {
    const footer = <div>Footer</div>;
    const layout = render(<Layout footer={footer}>Content</Layout>);

    expect(
      layout.container.firstElementChild.querySelector('.sg-layout__footer')
    ).toBeTruthy();
  });

  it('reserved-order', () => {
    const layout = render(<Layout reversedOrder>Content</Layout>);

    expect(
      layout.container.firstElementChild.querySelector(
        '.sg-layout__container--reversed-order'
      )
    ).toBeTruthy();
  });

  it('no-max-width', () => {
    const layout = render(<Layout noMaxWidth>Content</Layout>);

    expect(
      layout.container.firstElementChild.querySelector(
        '.sg-layout__container--no-max-width'
      )
    ).toBeTruthy();
  });

  it('no-margin-top', () => {
    const layout = render(<Layout noMarginTop>Content</Layout>);

    expect(
      layout.container.firstElementChild.querySelector(
        '.sg-layout__container--no-margin-top'
      )
    ).toBeTruthy();
  });

  it('full-page', () => {
    const layout = render(<Layout fullPage>Content</Layout>);

    expect(
      layout.container.firstElementChild.querySelector(
        '.sg-layout__container--full-page'
      )
    ).toBeTruthy();
  });

  describe('a11y', () => {
    it('should have no a11y violations', async () => {
      await testA11y(<Layout>item</Layout>);
    });
  });
});

describe('LayoutContent', () => {
  it('render', () => {
    const layoutContent = render(<LayoutContent>Content</LayoutContent>);

    expect(
      layoutContent.container.firstElementChild.classList.contains(
        'sg-layout__content'
      )
    ).toEqual(true);
  });

  it('no-max-width', () => {
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
  it('render', () => {
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
  it('render', () => {
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
