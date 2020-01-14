import React from 'react';
import Card, { CARD_PADDING } from './Card';
import CardHole, { CARD_HOLE_COLOR } from './CardHole';
import { shallow } from 'enzyme';
describe('Card', function () {
  test('render', function () {
    var card = shallow(React.createElement(Card, null, React.createElement(CardHole, {
      color: CARD_HOLE_COLOR.GRAY_SECONDARY_LIGHT
    }, "This is card top"), React.createElement(CardHole, {
      color: CARD_HOLE_COLOR.GRAY_SECONDARY
    }, "This is card bottom")));
    expect(card.hasClass('sg-card')).toEqual(true);
  });
  test('full', function () {
    var card = shallow(React.createElement(Card, {
      full: true
    }, React.createElement(CardHole, {
      color: CARD_HOLE_COLOR.GRAY_SECONDARY_LIGHT
    }, "This is card top"), React.createElement(CardHole, {
      color: CARD_HOLE_COLOR.GRAY_SECONDARY
    }, "This is card bottom")));
    expect(card.hasClass('sg-card--full')).toEqual(true);
  });
  test('vertical', function () {
    var card = shallow(React.createElement(Card, {
      vertical: true
    }, React.createElement(CardHole, {
      color: CARD_HOLE_COLOR.GRAY_SECONDARY_LIGHT
    }, "This is card top"), React.createElement(CardHole, {
      color: CARD_HOLE_COLOR.GRAY_SECONDARY
    }, "This is card bottom")));
    expect(card.hasClass('sg-card--vertical')).toEqual(true);
  });
  test('centered', function () {
    var card = shallow(React.createElement(Card, {
      centered: true
    }, React.createElement(CardHole, {
      color: CARD_HOLE_COLOR.GRAY_SECONDARY_LIGHT
    }, "This is card top"), React.createElement(CardHole, {
      color: CARD_HOLE_COLOR.GRAY_SECONDARY
    }, "This is card bottom")));
    expect(card.hasClass('sg-card--centered')).toEqual(true);
  });
  test('small padding', function () {
    var padding = CARD_PADDING.SMALL;
    var card = shallow(React.createElement(Card, {
      padding: padding
    }, React.createElement(CardHole, {
      color: CARD_HOLE_COLOR.GRAY_SECONDARY_LIGHT
    }, "This is card top"), React.createElement(CardHole, {
      color: CARD_HOLE_COLOR.GRAY_SECONDARY
    }, "This is card bottom")));
    expect(card.hasClass('sg-card--padding-small')).toEqual(true);
  });
  test('large padding', function () {
    var padding = CARD_PADDING.LARGE;
    var card = shallow(React.createElement(Card, {
      padding: padding
    }, React.createElement(CardHole, {
      color: CARD_HOLE_COLOR.GRAY_SECONDARY_LIGHT
    }, "This is card top"), React.createElement(CardHole, {
      color: CARD_HOLE_COLOR.GRAY_SECONDARY
    }, "This is card bottom")));
    expect(card.hasClass('sg-card--padding-large')).toEqual(true);
  });
});