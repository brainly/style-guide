import React from 'react';
import CardHole, {COLOR, PADDING} from './CardHole';
import {shallow} from 'enzyme';

describe('<CardHole />', () => {
  test('render', () => {
    const cardHole = shallow(
      <CardHole>
        some text
      </CardHole>
    );

    expect(cardHole.hasClass('sg-card__hole')).toEqual(true);
  });

  test('colors', () => {
    const color = COLOR.GRAY_SECONDARY;
    const cardHole = shallow(
      <CardHole color={color}>
        some text
      </CardHole>
    );
  
    expect(cardHole.hasClass(`sg-card__hole--${color}`)).toEqual(true);
  });
});
