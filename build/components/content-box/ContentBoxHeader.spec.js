import React from 'react';
import { SIZE, ALIGNMENT } from './ContentBoxConstants';
import ContentBoxHeader from './ContentBoxHeader';
import { shallow } from 'enzyme';
describe('<ContentBoxHeader />', function () {
  it('renders', function () {
    var testBox = shallow(React.createElement(ContentBoxHeader, null, "test"));
    expect(testBox.hasClass('sg-content-box__header')).toEqual(true);
  });
  it('has class that aligns elements to center', function () {
    var testBox = shallow(React.createElement(ContentBoxHeader, {
      align: ALIGNMENT.CENTER
    }, "test"));
    expect(testBox.hasClass('sg-content-box__header--with-centered-elements')).toEqual(true);
  });
  it('has spaced class', function () {
    var testBox = shallow(React.createElement(ContentBoxHeader, {
      spaced: true
    }, "test"));
    var testBox2 = shallow(React.createElement(ContentBoxHeader, {
      spacedSmall: true
    }, "test"));
    expect(testBox.hasClass('sg-content-box__header--spaced')).toEqual(true);
    expect(testBox2.hasClass('sg-content-box__header--spaced-small')).toEqual(true);
  });
  it('has spacedTop proper class', function () {
    var testBox = shallow(React.createElement(ContentBoxHeader, {
      spacedTop: SIZE.NORMAL
    }, "test"));
    expect(testBox.hasClass('sg-content-box__header--spaced-top')).toBeTruthy();
    expect(testBox.hasClass('sg-content-box__header--spaced-top-normal')).toBeFalsy();
  });
  it('has spacedTop class with proper size', function () {
    var testBox = shallow(React.createElement(ContentBoxHeader, {
      spacedTop: SIZE.XSMALL
    }, "test"));
    expect(testBox.hasClass('sg-content-box__header--spaced-top-xsmall')).toEqual(true);
  });
  it('has spacedBottom proper class', function () {
    var testBox = shallow(React.createElement(ContentBoxHeader, {
      spacedBottom: SIZE.NORMAL
    }, "test"));
    expect(testBox.hasClass('sg-content-box__header--spaced-bottom')).toBeTruthy();
    expect(testBox.hasClass('sg-content-box__header--spaced-bottom-normal')).toBeFalsy();
  });
  it('has spacedBottom class with proper size', function () {
    var testBox = shallow(React.createElement(ContentBoxHeader, {
      spacedBottom: SIZE.XSMALL
    }, "test"));
    expect(testBox.hasClass('sg-content-box__header--spaced-bottom-xsmall')).toEqual(true);
  });
});