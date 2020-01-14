import React from 'react';
import ContentBoxContent from './ContentBoxContent';
import { SIZE, ALIGNMENT } from './ContentBoxConstants';
import { shallow } from 'enzyme';
describe('<ContentBoxContent />', function () {
  it('renders', function () {
    var testBox = shallow(React.createElement(ContentBoxContent, null, "test"));
    expect(testBox.hasClass('sg-content-box__content')).toEqual(true);
  });
  it('has full class', function () {
    var testBox = shallow(React.createElement(ContentBoxContent, {
      full: true
    }, "test"));
    expect(testBox.hasClass('sg-content-box__content--full')).toEqual(true);
  });
  it('has class that aligns elements to right', function () {
    var testBox = shallow(React.createElement(ContentBoxContent, {
      align: ALIGNMENT.RIGHT
    }, "test"));
    expect(testBox.hasClass('sg-content-box__content--with-elements-to-right')).toEqual(false);
  });
  it('has class that aligns elements to center', function () {
    var testBox = shallow(React.createElement(ContentBoxContent, {
      align: ALIGNMENT.CENTER
    }, "test"));
    expect(testBox.hasClass('sg-content-box__content--with-centered-text')).toEqual(true);
  });
  it('has spacedTop proper class', function () {
    var testBox = shallow(React.createElement(ContentBoxContent, {
      spacedTop: SIZE.NORMAL
    }, "test"));
    expect(testBox.hasClass('sg-content-box__content--spaced-top')).toBeTruthy();
    expect(testBox.hasClass('sg-content-box__content--spaced-top-normal')).toBeFalsy();
  });
  it('has spacedTop class with proper size', function () {
    var testBox = shallow(React.createElement(ContentBoxContent, {
      spacedTop: SIZE.XSMALL
    }, "test"));
    expect(testBox.hasClass('sg-content-box__content--spaced-top-xsmall')).toEqual(true);
  });
  it('has spacedBottom proper class', function () {
    var testBox = shallow(React.createElement(ContentBoxContent, {
      spacedBottom: SIZE.NORMAL
    }, "test"));
    expect(testBox.hasClass('sg-content-box__content--spaced-bottom')).toBeTruthy();
    expect(testBox.hasClass('sg-content-box__content--spaced-bottom-normal')).toBeFalsy();
  });
  it('has spacedBottom class with proper size', function () {
    var testBox = shallow(React.createElement(ContentBoxContent, {
      spacedBottom: SIZE.XSMALL
    }, "test"));
    expect(testBox.hasClass('sg-content-box__content--spaced-bottom-xsmall')).toEqual(true);
  });
});