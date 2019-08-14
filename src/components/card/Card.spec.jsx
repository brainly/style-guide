import React from 'react';
import Card, {CARD_PADDING} from './Card';
import CardHole, {CARD_HOLE_COLOR} from './CardHole';
import {shallow} from 'enzyme';

describe('Card', () => {
  test('render', () => {
    const card = shallow(
      <Card>
        <CardHole color={CARD_HOLE_COLOR.GRAY_SECONDARY_LIGHT}>
          This is card top
        </CardHole>
        <CardHole color={CARD_HOLE_COLOR.GRAY_SECONDARY}>
          This is card bottom
        </CardHole>
      </Card>
    );

    expect(card.hasClass('sg-card')).toEqual(true);
  });

  test('full', () => {
    const card = shallow(
      <Card full>
        <CardHole color={CARD_HOLE_COLOR.GRAY_SECONDARY_LIGHT}>
          This is card top
        </CardHole>
        <CardHole color={CARD_HOLE_COLOR.GRAY_SECONDARY}>
          This is card bottom
        </CardHole>
      </Card>
    );

    expect(card.hasClass('sg-card--full')).toEqual(true);
  });

  test('vertical', () => {
    const card = shallow(
      <Card vertical>
        <CardHole color={CARD_HOLE_COLOR.GRAY_SECONDARY_LIGHT}>
          This is card top
        </CardHole>
        <CardHole color={CARD_HOLE_COLOR.GRAY_SECONDARY}>
          This is card bottom
        </CardHole>
      </Card>
    );

    expect(card.hasClass('sg-card--vertical')).toEqual(true);
  });

  test('centered', () => {
    const card = shallow(
      <Card centered>
        <CardHole color={CARD_HOLE_COLOR.GRAY_SECONDARY_LIGHT}>
          This is card top
        </CardHole>
        <CardHole color={CARD_HOLE_COLOR.GRAY_SECONDARY}>
          This is card bottom
        </CardHole>
      </Card>
    );

    expect(card.hasClass('sg-card--centered')).toEqual(true);
  });

  test('small padding', () => {
    const padding = CARD_PADDING.SMALL;
    const card = shallow(
      <Card padding={padding}>
        <CardHole color={CARD_HOLE_COLOR.GRAY_SECONDARY_LIGHT}>
          This is card top
        </CardHole>
        <CardHole color={CARD_HOLE_COLOR.GRAY_SECONDARY}>
          This is card bottom
        </CardHole>
      </Card>
    );

    expect(card.hasClass('sg-card--padding-small')).toEqual(true);
  });

  test('large padding', () => {
    const padding = CARD_PADDING.LARGE;
    const card = shallow(
      <Card padding={padding}>
        <CardHole color={CARD_HOLE_COLOR.GRAY_SECONDARY_LIGHT}>
          This is card top
        </CardHole>
        <CardHole color={CARD_HOLE_COLOR.GRAY_SECONDARY}>
          This is card bottom
        </CardHole>
      </Card>
    );

    expect(card.hasClass('sg-card--padding-large')).toEqual(true);
  });
});
