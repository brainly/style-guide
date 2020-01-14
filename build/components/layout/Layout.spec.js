import React from 'react';
import Layout from './Layout';
import LayoutBox from './LayoutBox';
import LayoutContent from './LayoutContent';
import LayoutSecondaryContent from './LayoutSecondaryContent';
import LayoutAsideContent from './LayoutAsideContent';
import { shallow } from 'enzyme';
describe('Layout', function () {
  test('render', function () {
    var layout = shallow(React.createElement(Layout, null, "Content"));
    expect(layout.hasClass('sg-layout')).toEqual(true);
  });
  test('render with footer', function () {
    var footer = React.createElement("div", {
      className: "sg-footer"
    }, React.createElement("div", {
      className: "sg-footer__container"
    }, "Footer"));
    var layout = shallow(React.createElement(Layout, {
      footer: footer
    }, "Content"));
    expect(layout.find('.sg-layout__footer')).toHaveLength(1);
  });
  test('reserved-order', function () {
    var layout = shallow(React.createElement(Layout, {
      reversedOrder: true
    }, "Content"));
    var layoutContainer = layout.find('.sg-layout__container');
    expect(layoutContainer.hasClass('sg-layout__container--reversed-order')).toEqual(true);
  });
  test('no-max-width', function () {
    var layout = shallow(React.createElement(Layout, {
      noMaxWidth: true
    }, "Content"));
    var layoutContainer = layout.find('.sg-layout__container');
    expect(layoutContainer.hasClass('sg-layout__container--no-max-width')).toEqual(true);
  });
  test('no-margin-top', function () {
    var layout = shallow(React.createElement(Layout, {
      noMarginTop: true
    }, "Content"));
    var layoutContainer = layout.find('.sg-layout__container');
    expect(layoutContainer.hasClass('sg-layout__container--no-margin-top')).toEqual(true);
  });
  test('full-page', function () {
    var layout = shallow(React.createElement(Layout, {
      fullPage: true
    }, "Content"));
    var layoutContainer = layout.find('.sg-layout__container');
    expect(layoutContainer.hasClass('sg-layout__container--full-page')).toEqual(true);
  });
});
describe('LayoutContent', function () {
  test('render', function () {
    var layoutContent = shallow(React.createElement(LayoutContent, null, "Content"));
    expect(layoutContent.hasClass('sg-layout__content')).toEqual(true);
  });
  test('no-max-width', function () {
    var layoutContent = shallow(React.createElement(LayoutContent, {
      noMaxWidth: true
    }, "Content"));
    expect(layoutContent.hasClass('sg-layout__content--no-max-width')).toEqual(true);
  });
});
describe('LayoutAsideContent', function () {
  test('render', function () {
    var layoutAsideContent = shallow(React.createElement(LayoutAsideContent, null, "Content"));
    expect(layoutAsideContent.hasClass('sg-layout__aside-content')).toEqual(true);
  });
});
describe('LayoutSecondaryContent', function () {
  test('render', function () {
    var component = shallow(React.createElement(LayoutSecondaryContent, null, "Content"));
    expect(component.hasClass('sg-layout__secondary-content')).toEqual(true);
  });
});
describe('LayoutBox', function () {
  test('render', function () {
    var layoutBox = shallow(React.createElement(LayoutBox, null, "Content"));
    expect(layoutBox.hasClass('sg-layout__box')).toEqual(true);
  });
});