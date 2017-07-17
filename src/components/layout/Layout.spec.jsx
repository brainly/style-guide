import React from 'react';
import Layout from './Layout';
import LayoutContainer from './LayoutContainer';
import LayoutBox from './LayoutBox';
import LayoutContent from './LayoutContent';
import LayoutAsideContent from './LayoutAsideContent';
import LayoutFooter from './LayoutFooter';
import {shallow} from 'enzyme';

describe('Layout', () => {
  test('render', () => {
    const layout = shallow(
      <Layout>
        <LayoutContainer>
            Content
        </LayoutContainer>
      </Layout>
    );

    expect(layout.hasClass('sg-layout')).toEqual(true);
  });
});

describe('LayoutContainer', () => {
  test('render', () => {
    const layoutContainer = shallow(
      <LayoutContainer>
        Content
      </LayoutContainer>
    );

    expect(layoutContainer.hasClass('sg-layout__container')).toEqual(true);
  });

  test('reserved-order', () => {
    const layoutContainer = shallow(
      <LayoutContainer reversedOrder={true}>Content</LayoutContainer>
    );

    expect(layoutContainer.hasClass('sg-layout__container--reversed-order')).toEqual(true);
  });

  test('no-max-width', () => {
    const layoutContainer = shallow(
      <LayoutContainer noMaxWidth={true}>Content</LayoutContainer>
    );

    expect(layoutContainer.hasClass('sg-layout__container--no-max-width')).toEqual(true);
  });

  test('no-margin-top', () => {
    const layoutContainer = shallow(
      <LayoutContainer noMarginTop={true}>Content</LayoutContainer>
    );

    expect(layoutContainer.hasClass('sg-layout__container--no-margin-top')).toEqual(true);
  });

  test('full-page', () => {
    const layoutContainer = shallow(
      <LayoutContainer fullPage={true}>Content</LayoutContainer>
    );

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
      <LayoutContent noMaxWidth={true}>Content</LayoutContent>
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

describe('LayoutFooter', () => {
  test('render', () => {
    const layoutFooter = shallow(
      <LayoutFooter>
        Content
      </LayoutFooter>
    );

    expect(layoutFooter.hasClass('sg-layout__footer')).toEqual(true);
  });
});
