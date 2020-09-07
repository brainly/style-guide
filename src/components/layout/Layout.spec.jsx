import React from 'react';
import Layout from './Layout';
import LayoutContent from './LayoutContent';
import LayoutSecondaryContent from './LayoutSecondaryContent';
import LayoutAsideContent from './LayoutAsideContent';
import {shallow} from 'enzyme';

describe('Layout', () => {
  test('render', () => {
    const layout = shallow(<Layout>Content</Layout>);

    expect(layout.hasClass('sg-layout')).toEqual(true);
  });

  test('render with footer', () => {
    const footer = (
      <div className="sg-footer">
        <div className="sg-footer__container">Footer</div>
      </div>
    );

    const layout = shallow(<Layout footer={footer}>Content</Layout>);

    expect(layout.find('.sg-layout__footer')).toHaveLength(1);
  });

  test('reserved-order', () => {
    const layout = shallow(<Layout reversedOrder>Content</Layout>);

    const layoutContainer = layout.find('.sg-layout__container');

    expect(
      layoutContainer.hasClass('sg-layout__container--reversed-order')
    ).toEqual(true);
  });

  test('no-max-width', () => {
    const layout = shallow(<Layout noMaxWidth>Content</Layout>);

    const layoutContainer = layout.find('.sg-layout__container');

    expect(
      layoutContainer.hasClass('sg-layout__container--no-max-width')
    ).toEqual(true);
  });

  test('no-margin-top', () => {
    const layout = shallow(<Layout noMarginTop>Content</Layout>);

    const layoutContainer = layout.find('.sg-layout__container');

    expect(
      layoutContainer.hasClass('sg-layout__container--no-margin-top')
    ).toEqual(true);
  });

  test('full-page', () => {
    const layout = shallow(<Layout fullPage>Content</Layout>);

    const layoutContainer = layout.find('.sg-layout__container');

    expect(layoutContainer.hasClass('sg-layout__container--full-page')).toEqual(
      true
    );
  });
});

describe('LayoutContent', () => {
  test('render', () => {
    const layoutContent = shallow(<LayoutContent>Content</LayoutContent>);

    expect(layoutContent.hasClass('sg-layout__content')).toEqual(true);
  });

  test('no-max-width', () => {
    const layoutContent = shallow(
      <LayoutContent noMaxWidth>Content</LayoutContent>
    );

    expect(layoutContent.hasClass('sg-layout__content--no-max-width')).toEqual(
      true
    );
  });
});

describe('LayoutAsideContent', () => {
  test('render', () => {
    const layoutAsideContent = shallow(
      <LayoutAsideContent>Content</LayoutAsideContent>
    );

    expect(layoutAsideContent.hasClass('sg-layout__aside-content')).toEqual(
      true
    );
  });
});

describe('LayoutSecondaryContent', () => {
  test('render', () => {
    const component = shallow(
      <LayoutSecondaryContent>Content</LayoutSecondaryContent>
    );

    expect(component.hasClass('sg-layout__secondary-content')).toEqual(true);
  });
});
