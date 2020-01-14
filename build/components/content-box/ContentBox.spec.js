import React from 'react';
import ContentBox, { CONTENT_BOX_SPACING_SIZE } from './ContentBox';
import { shallow } from 'enzyme';
describe('<ContentBox />', function () {
  it('renders', function () {
    var contentBox = shallow(React.createElement(ContentBox, null, "test"));
    expect(contentBox.hasClass('sg-content-box')).toEqual(true);
  });
  it('has full class', function () {
    var contentBox = shallow(React.createElement(ContentBox, {
      full: true
    }, "test"));
    expect(contentBox.hasClass('sg-content-box--full')).toEqual(true);
  });
  it('has spaced class', function () {
    var contentBox = shallow(React.createElement(ContentBox, {
      spaced: true
    }, "test"));
    var contentBox2 = shallow(React.createElement(ContentBox, {
      spacedSmall: true
    }, "test"));
    expect(contentBox.hasClass('sg-content-box--spaced')).toEqual(true);
    expect(contentBox2.hasClass('sg-content-box--spaced-small')).toEqual(true);
  });
  it('has spacedBottom proper class', function () {
    var testBox = shallow(React.createElement(ContentBox, {
      spacedBottom: CONTENT_BOX_SPACING_SIZE.NORMAL
    }, "test"));
    expect(testBox.hasClass('sg-content-box--spaced-bottom')).toEqual(true);
    expect(testBox.hasClass('sg-content-box--spaced-bottom-normal')).toEqual(false);
  });
  it('has spacedBottom class with proper size', function () {
    var testBox = shallow(React.createElement(ContentBox, {
      spacedBottom: CONTENT_BOX_SPACING_SIZE.XSMALL
    }, "test"));
    expect(testBox.hasClass('sg-content-box--spaced-bottom-xsmall')).toEqual(true);
  });
  it('has spacedTop proper class', function () {
    var testBox = shallow(React.createElement(ContentBox, {
      spacedTop: CONTENT_BOX_SPACING_SIZE.NORMAL
    }, "test"));
    expect(testBox.hasClass('sg-content-box--spaced-top')).toEqual(true);
    expect(testBox.hasClass('sg-content-box--spaced-top-normal')).toEqual(false);
  });
  it('has spacedTop class with proper size', function () {
    var testBox = shallow(React.createElement(ContentBox, {
      spacedTop: CONTENT_BOX_SPACING_SIZE.XSMALL
    }, "test"));
    expect(testBox.hasClass('sg-content-box--spaced-top-xsmall')).toEqual(true);
  });
});