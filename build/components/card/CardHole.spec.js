import React from 'react';
import CardHole, { CARD_HOLE_COLOR } from './CardHole';
import { shallow } from 'enzyme';
describe('<CardHole />', function () {
  test('render', function () {
    var cardHole = shallow(React.createElement(CardHole, null, "some text"));
    expect(cardHole.hasClass('sg-card__hole')).toEqual(true);
  });
  test('colors', function () {
    var color = CARD_HOLE_COLOR.GRAY_SECONDARY;
    var cardHole = shallow(React.createElement(CardHole, {
      color: color
    }, "some text"));
    expect(cardHole.hasClass("sg-card__hole--".concat(color))).toEqual(true);
  });
});