import React from 'react';
import { SIZE, ALIGNMENT } from './ContentBoxConstants';
import ContentBoxActions from './ContentBoxActions';
import { shallow } from 'enzyme';
describe('<ContentBoxActions />', function () {
  it('renders', function () {
    var testBox = shallow(React.createElement(ContentBoxActions, null, "test"));
    expect(testBox.hasClass('sg-content-box__actions')).toEqual(true);
  });
  it('has class that aligns elements to center', function () {
    var testBox = shallow(React.createElement(ContentBoxActions, {
      align: ALIGNMENT.CENTER
    }, "test"));
    expect(testBox.hasClass('sg-content-box__actions--with-centered-elements')).toEqual(true);
  });
  it('has class that aligns elements to right', function () {
    var testBox = shallow(React.createElement(ContentBoxActions, {
      align: ALIGNMENT.RIGHT
    }, "test"));
    expect(testBox.hasClass('sg-content-box__actions--with-elements-to-right')).toEqual(true);
  });
  it('has spacedTop class with proper size', function () {
    var testBox = shallow(React.createElement(ContentBoxActions, {
      spacedTop: SIZE.XSMALL
    }, "test"));
    expect(testBox.hasClass('sg-content-box__actions--spaced-top-xsmall')).toEqual(true);
  });
  it('has spacedBottom class with proper size', function () {
    var testBox = shallow(React.createElement(ContentBoxActions, {
      spacedBottom: SIZE.XSMALL
    }, "test"));
    expect(testBox.hasClass('sg-content-box__actions--spaced-bottom-xsmall')).toEqual(true);
  });
});