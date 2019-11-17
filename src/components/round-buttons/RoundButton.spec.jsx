import React from 'react';
import RoundButton, {
  ROUND_BUTTON_ICON_TYPE,
  ROUND_BUTTON_COLOR,
  ROUND_BUTTON_SIZE,
} from './RoundButton';
import Icon, {ICON_COLOR, SIZE} from '../icons/Icon';
import {shallow} from 'enzyme';

describe('icons', () => {
  it('render', () => {
    const type = ROUND_BUTTON_ICON_TYPE.HEART;
    const roundButton = shallow(
      <RoundButton color={ROUND_BUTTON_COLOR.BLACK_BASE_500} type={type} />
    );

    expect(roundButton.find(Icon)).toHaveLength(1);
  });

  it('colors', () => {
    const type = ROUND_BUTTON_ICON_TYPE.HEART;
    const color = ROUND_BUTTON_COLOR.PEACH_DARK_700;
    const roundButton = shallow(<RoundButton type={type} color={color} />);

    expect(roundButton.hasClass('sg-round-button--peach-dark-700')).toEqual(
      true
    );
  });

  it('size', () => {
    const size = ROUND_BUTTON_SIZE.SMALL;
    const sizeOfSmallIco = '16';
    const iconType = ROUND_BUTTON_ICON_TYPE.HEART;
    const roundButton = shallow(
      <RoundButton
        color={ROUND_BUTTON_COLOR.BLACK_BASE_500}
        iconType={iconType}
        size={size}
      />
    );
    const icon = roundButton.find(Icon);

    expect(roundButton.hasClass('sg-round-button--small')).toEqual(true);
    expect(icon.props().size).toEqual(sizeOfSmallIco);
  });

  it('filled', () => {
    const iconType = ROUND_BUTTON_ICON_TYPE.HEART;
    const filledWhiteIcon = ICON_COLOR.LIGHT;
    const roundButton = shallow(
      <RoundButton
        color={ROUND_BUTTON_COLOR.BLACK_BASE_500}
        iconType={iconType}
        filled
      />
    );
    const icon = roundButton.find(Icon);

    expect(roundButton.hasClass('sg-round-button--filled')).toEqual(true);
    expect(icon.props().color).toEqual(filledWhiteIcon);
  });

  it('accepts additional props', () => {
    const iconType = ROUND_BUTTON_ICON_TYPE.HEART;
    const roundButton = shallow(
      <RoundButton
        color={ROUND_BUTTON_COLOR.BLACK_BASE_500}
        iconType={iconType}
        type="submit"
      />
    );

    expect(roundButton.props().type).toEqual('submit');
  });
});
