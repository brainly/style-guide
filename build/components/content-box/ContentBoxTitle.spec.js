import React from 'react';
import { SIZE, ALIGNMENT } from './ContentBoxConstants';
import ContentBoxTitle from './ContentBoxTitle';
import { shallow } from 'enzyme';
describe('<ContentBoxTitle />', function () {
  it('renders', function () {
    var testBox = shallow(React.createElement(ContentBoxTitle, null, "test"));
    expect(testBox.hasClass('sg-content-box__title')).toEqual(true);
  });
  it('has class that aligns elements to center', function () {
    var testBox = shallow(React.createElement(ContentBoxTitle, {
      align: ALIGNMENT.CENTER
    }, "test"));
    expect(testBox.hasClass('sg-content-box__title--with-centered-elements')).toEqual(true);
  });
  it('has spaced class', function () {
    var testBox = shallow(React.createElement(ContentBoxTitle, {
      spaced: true
    }, "test"));
    var testBox2 = shallow(React.createElement(ContentBoxTitle, {
      spacedSmall: true
    }, "test"));
    expect(testBox.hasClass('sg-content-box__title--spaced')).toEqual(true);
    expect(testBox2.hasClass('sg-content-box__title--spaced-small')).toEqual(true);
  });
  it('has spacedTop proper class', function () {
    var testBox = shallow(React.createElement(ContentBoxTitle, {
      spacedTop: SIZE.NORMAL
    }, "test"));
    expect(testBox.hasClass('sg-content-box__title--spaced-top')).toBeTruthy();
    expect(testBox.hasClass('sg-content-box__title--spaced-top-normal')).toBeFalsy();
  });
  it('has spacedTop class with proper size', function () {
    var testBox = shallow(React.createElement(ContentBoxTitle, {
      spacedTop: SIZE.XSMALL
    }, "test"));
    expect(testBox.hasClass('sg-content-box__title--spaced-top-xsmall')).toEqual(true);
  });
  it('has spacedBottom proper class', function () {
    var testBox = shallow(React.createElement(ContentBoxTitle, {
      spacedBottom: SIZE.NORMAL
    }, "test"));
    expect(testBox.hasClass('sg-content-box__title--spaced-bottom')).toBeTruthy();
    expect(testBox.hasClass('sg-content-box__title--spaced-bottom-normal')).toBeFalsy();
  });
  it('has spacedBottom class with proper size', function () {
    var testBox = shallow(React.createElement(ContentBoxTitle, {
      spacedBottom: SIZE.XSMALL
    }, "test"));
    expect(testBox.hasClass('sg-content-box__title--spaced-bottom-xsmall')).toEqual(true);
  });
});