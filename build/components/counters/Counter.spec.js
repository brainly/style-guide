import React from 'react';
import Counter from './Counter';
import Text from 'text/Text';
import Icon from 'icons/Icon';
import { shallow } from 'enzyme';
describe('<Counter />', function () {
  it('render itself without error', function () {
    var component = shallow(React.createElement(Counter, null, "1"));
    expect(component).toHaveLength(1);
  });
  it('sets <Text /> component size for normal', function () {
    var counter = shallow(React.createElement(Counter, null, "12"));
    var text = counter.find(Text);
    expect(text.props().size).toEqual('small');
  });
  it('sets <Text /> component xsmall for size small counter', function () {
    var counter = shallow(React.createElement(Counter, {
      size: "small"
    }, "12"));
    var text = counter.find(Text);
    expect(text.props().size).toEqual('xsmall');
  });
  it('renders points icon inside the points counter', function () {
    var counter = shallow(React.createElement(Counter, {
      icon: "points",
      size: "small"
    }, "12"));
    var icon = counter.find(Icon);
    expect(icon.props().type).toEqual('points');
  });
});