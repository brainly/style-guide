import React from 'react';
import RoundButton from './RoundButton';
import Icon, {ICON_COLOR} from '../icons/Icon';
import {shallow} from 'enzyme';

describe('icons', () => {
  it('render', () => {
    const roundButton = shallow(<RoundButton color="black" type="heart" />);

    expect(roundButton.find(Icon)).toHaveLength(1);
  });

  it('colors', () => {
    const roundButton = shallow(<RoundButton type="heart" color="peach" />);

    expect(roundButton.hasClass('sg-round-button--peach')).toEqual(true);
  });

  it('size', () => {
    const sizeOfSmallIco = '16';
    const roundButton = shallow(
      <RoundButton color="black" iconType="heart" size="small" />
    );
    const icon = roundButton.find(Icon);

    expect(roundButton.hasClass('sg-round-button--small')).toEqual(true);
    expect(icon.props().size).toEqual(sizeOfSmallIco);
  });

  it('filled', () => {
    const filledWhiteIcon = ICON_COLOR.LIGHT;
    const roundButton = shallow(
      <RoundButton color="black" iconType="heart" filled />
    );
    const icon = roundButton.find(Icon);

    expect(roundButton.hasClass('sg-round-button--filled')).toEqual(true);
    expect(icon.props().color).toEqual(filledWhiteIcon);
  });

  it('accepts additional props', () => {
    const roundButton = shallow(
      <RoundButton color="black" iconType="heart" type="submit" />
    );

    expect(roundButton.props().type).toEqual('submit');
  });
});
