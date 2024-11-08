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
      // @ts-ignore TS18047
      layout.container.firstElementChild.querySelector('.sg-layout__footer')
    ).toBeTruthy();
  });

  it('no-max-width', () => {
    const layout = render(<Layout noMaxWidth>Content</Layout>);

    expect(
      // @ts-ignore TS18047
      layout.container.firstElementChild.querySelector(
        '.sg-layout__container--no-max-width'
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

    expect(layoutContent.getByText('Content')).toBeTruthy();
  });

  it('no-max-width', () => {
    const layoutContent = render(
      <LayoutContent noMaxWidth>Content</LayoutContent>
    );

    expect(
      // @ts-ignore TS18047
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

    expect(layoutAsideContent.getByText('Content')).toBeTruthy();
  });
});

describe('LayoutSecondaryContent', () => {
  it('render', () => {
    const component = render(
      <LayoutSecondaryContent>Content</LayoutSecondaryContent>
    );

    expect(component.getByText('Content')).toBeTruthy();
  });
});
