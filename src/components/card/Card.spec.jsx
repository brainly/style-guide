import React from 'react';
import Card, {PADDING} from './Card';
import CardHole, {COLOR} from './CardHole';
import {shallow} from 'enzyme';

describe('ActionList', () => {
  test('render', () => {
    const card = shallow(
      <Card>
        <CardHole color={COLOR.GRAY_SECONDARY_LIGHT}>
          This is card top
        </CardHole>
        <CardHole color={COLOR.GRAY_SECONDARY}>
          This is card bottom
        </CardHole>
      </Card>
    );

    expect(card.hasClass('sg-card')).toEqual(true);
  });

  test('full', () => {
    const card = shallow(
      <Card full>
        <CardHole color={COLOR.GRAY_SECONDARY_LIGHT}>
          This is card top
        </CardHole>
        <CardHole color={COLOR.GRAY_SECONDARY}>
          This is card bottom
        </CardHole>
      </Card>
    );

    expect(card.hasClass('sg-card--full')).toEqual(true);
  });

  test('centered', () => {
    const card = shallow(
      <Card centered>
        <CardHole color={COLOR.GRAY_SECONDARY_LIGHT}>
          This is card top
        </CardHole>
        <CardHole color={COLOR.GRAY_SECONDARY}>
          This is card bottom
        </CardHole>
      </Card>
    );

    expect(card.hasClass('sg-card--centered')).toEqual(true);
  });

  test('small padding', () => {
    const padding = PADDING.SMALL;
    const card = shallow(
      <Card padding={padding}>
        <CardHole color={COLOR.GRAY_SECONDARY_LIGHT}>
          This is card top
        </CardHole>
        <CardHole color={COLOR.GRAY_SECONDARY}>
          This is card bottom
        </CardHole>
      </Card>
    );

    expect(card.hasClass('sg-card--small-padding')).toEqual(true);
  });

  test('large padding', () => {
    const padding = PADDING.LARGE;
    const card = shallow(
      <Card padding={padding}>
        <CardHole color={COLOR.GRAY_SECONDARY_LIGHT}>
          This is card top
        </CardHole>
        <CardHole color={COLOR.GRAY_SECONDARY}>
          This is card bottom
        </CardHole>
      </Card>
    );

    expect(card.hasClass('sg-card--large-padding')).toEqual(true);
  });

});

