import React from 'react';
import RoundButton from './RoundButton';
import Icon, { ICON_COLOR } from '../icons/Icon';
import { shallow } from 'enzyme';
describe('icons', function () {
  it('render', function () {
    var roundButton = shallow(React.createElement(RoundButton, {
      color: "black",
      type: "heart"
    }));
    expect(roundButton.find(Icon)).toHaveLength(1);
  });
  it('colors', function () {
    var roundButton = shallow(React.createElement(RoundButton, {
      type: "heart",
      color: "peach"
    }));
    expect(roundButton.hasClass('sg-round-button--peach')).toEqual(true);
  });
  it('size', function () {
    var sizeOfSmallIco = '16';
    var roundButton = shallow(React.createElement(RoundButton, {
      color: "black",
      iconType: "heart",
      size: "small"
    }));
    var icon = roundButton.find(Icon);
    expect(roundButton.hasClass('sg-round-button--small')).toEqual(true);
    expect(icon.props().size).toEqual(sizeOfSmallIco);
  });
  it('filled', function () {
    var filledWhiteIcon = ICON_COLOR.LIGHT;
    var roundButton = shallow(React.createElement(RoundButton, {
      color: "black",
      iconType: "heart",
      filled: true
    }));
    var icon = roundButton.find(Icon);
    expect(roundButton.hasClass('sg-round-button--filled')).toEqual(true);
    expect(icon.props().color).toEqual(filledWhiteIcon);
  });
  it('accepts additional props', function () {
    var roundButton = shallow(React.createElement(RoundButton, {
      color: "black",
      iconType: "heart",
      type: "submit"
    }));
    expect(roundButton.props().type).toEqual('submit');
  });
});