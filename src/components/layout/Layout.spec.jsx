import React from 'react';
import Layout from './Layout';
import LayoutBox from './LayoutBox';
import LayoutContent from './LayoutContent';
import LayoutAsideContent from './LayoutAsideContent';
import {shallow} from 'enzyme';

describe('Layout', () => {
  test('render', () => {
    const layout = shallow(
      <Layout>
        Content
      </Layout>
    );

    expect(layout.hasClass('sg-layout')).toEqual(true);
  });

  test('error when no children', () => {
    const spy = jest.spyOn(console, 'error');

    console.error = jest.fn();
    shallow(
      <Layout />
    );
    expect(console.error.mock.calls).toHaveLength(1);

    spy.mockRestore();
  });

  test('render with footer', () => {
    const footer = (
      <div className="sg-footer">
        <div className="sg-footer__container">
          Footer
        </div>
      </div>
    );

    const layout = shallow(
      <Layout footer={footer}>
        Content
      </Layout>
    );

    expect(layout.find('.sg-layout__footer')).toHaveLength(1);
  });

  test('reserved-order', () => {
    const layout = shallow(
      <Layout reversedOrder>Content</Layout>
    );

    const layoutContainer = layout.find('.sg-layout__container');

    expect(layoutContainer.hasClass('sg-layout__container--reversed-order')).toEqual(true);
  });

  test('three-columns', () => {
    const layout = shallow(
      <Layout threeColumns>Content</Layout>
    );

    const layoutContainer = layout.find('.sg-layout');

    expect(layoutContainer.hasClass('sg-layout--three-columns')).toEqual(true);
  });

  test('no-max-width', () => {
    const layout = shallow(
      <Layout noMaxWidth>Content</Layout>
    );

    const layoutContainer = layout.find('.sg-layout__container');

    expect(layoutContainer.hasClass('sg-layout__container--no-max-width')).toEqual(true);
  });

  test('no-margin-top', () => {
    const layout = shallow(
      <Layout noMarginTop>Content</Layout>
    );

    const layoutContainer = layout.find('.sg-layout__container');

    expect(layoutContainer.hasClass('sg-layout__container--no-margin-top')).toEqual(true);
  });

  test('full-page', () => {
    const layout = shallow(
      <Layout fullPage>Content</Layout>
    );

    const layoutContainer = layout.find('.sg-layout__container');

    expect(layoutContainer.hasClass('sg-layout__container--full-page')).toEqual(true);
  });
});

describe('LayoutContent', () => {
  test('render', () => {
    const layoutContent = shallow(
      <LayoutContent>
        Content
      </LayoutContent>
    );

    expect(layoutContent.hasClass('sg-layout__content')).toEqual(true);
  });

  test('no-max-width', () => {
    const layoutContent = shallow(
      <LayoutContent noMaxWidth>Content</LayoutContent>
    );

    expect(layoutContent.hasClass('sg-layout__content--no-max-width')).toEqual(true);
  });
});

describe('LayoutAsideContent', () => {
  test('render', () => {
    const layoutAsideContent = shallow(
      <LayoutAsideContent>
        Content
      </LayoutAsideContent>
    );

    expect(layoutAsideContent.hasClass('sg-layout__aside-content')).toEqual(true);
  });
});

describe('LayoutBox', () => {
  test('render', () => {
    const layoutBox = shallow(
      <LayoutBox>
        Content
      </LayoutBox>
    );

    expect(layoutBox.hasClass('sg-layout__box')).toEqual(true);
  });
});
