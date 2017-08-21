import React from 'react';
import Label, {SIZE, ICON_COLOR, ICON_TYPE, LabelIcon} from './Label';
import Icon from 'icons/Icon';
import {shallow} from 'enzyme';

describe('Label', () => {
  test('render', () => {
    const iconType = ICON_TYPE.STAR;
    const label = shallow(
      <Label iconType={iconType} text="test"/>
    );
    const icon = label.find(LabelIcon);
    const textLabel = label.find('label.sg-label__text');

    expect(label.hasClass('sg-label')).toEqual(true);
    expect(textLabel).toHaveLength(1);
    expect(icon).toHaveLength(1);
    expect(icon.props().iconType).toEqual(iconType);
  });


  test('icon color', () => {
    const iconType = ICON_TYPE.HEART;
    const iconColor = ICON_COLOR.LAVENDER;
    const label = shallow(
      <Label iconType={iconType} iconColor={iconColor} text="test"/>
    );
    const icon = label.find(LabelIcon);

    expect(icon.props().iconColor).toEqual(iconColor);
  });

  test('size', () => {
    const size = SIZE.SMALL;
    const iconType = ICON_TYPE.HEART;
    const label = shallow(
      <Label iconType={iconType} size={size} text="test"/>
    );
    const icon = label.find(LabelIcon);

    expect(label.hasClass('sg-label--small')).toEqual(true);
    expect(icon.props().iconSize).toEqual(size.ICON_SIZE);
  });

  test('default size', () => {
    const size = SIZE.NORMAL;
    const iconType = ICON_TYPE.HEART;
    const label = shallow(
      <Label iconType={iconType} size={size} text="test"/>
    );
    const icon = label.find(LabelIcon);

    expect(label.hasClass('sg-label--small')).toEqual(false);
    expect(label.hasClass('sg-label--large')).toEqual(false);
    expect(icon.props().iconSize).toEqual(size.ICON_SIZE);
  });

  test('secondary label', () => {
    const label = shallow(
      <Label secondary={true} text="test"/>
    );

    expect(label.hasClass('sg-label--secondary')).toEqual(true);
  });

  test('emphasised', () => {
    const label = shallow(
      <Label emphasised={true} text="test"/>
    );

    expect(label.hasClass('sg-label--emphasised')).toEqual(true);
  });

  test('elements to top', () => {
    const iconType = ICON_TYPE.HEART;
    const label = shallow(
      <Label iconType={iconType} elementsToTop={true} text="test"/>
    );

    expect(label.hasClass('sg-label--elements-to-the-top')).toEqual(true);
  });

  test('label with no text', () => {
    const iconType = ICON_TYPE.HEART;
    const label = shallow(
      <Label iconType={iconType}/>
    );
    const textLabel = label.find('div.sg-label__text');

    expect(textLabel).toHaveLength(0);
  });

  test('label with a number', () => {
    const label = shallow(
      <Label secondary={true} text="test" number={23}/>
    );
    const numberLabel = label.find('div.sg-label__number');

    expect(numberLabel).toHaveLength(1);

    const label2 = shallow(
      <Label secondary={true} text="test" number={0}/>
    );
    const numberLabel2 = label2.find('div.sg-label__number');

    expect(numberLabel2).toHaveLength(1);
  });

  test('passing children', () => {
    const element = <div className="smth123">xyz</div>;
    const label = shallow(
      <Label>
        {element}
      </Label>
    );

    expect(label.find('div.smth123')).toHaveLength(1);
  });

});

describe('LabelIcon', () => {
  test('render icon and pass props', () => {
    const iconType = ICON_TYPE.STAR;
    const iconColor = ICON_COLOR.BLUE;
    const iconSize = 10;
    const label = shallow(
      <LabelIcon iconType={iconType} iconColor={iconColor} iconSize={iconSize}/>
    );
    const icon = label.find(Icon);

    expect(icon).toHaveLength(1);
    expect(icon.props().type).toEqual(iconType);
    expect(icon.props().color).toEqual(iconColor);
    expect(icon.props().size).toEqual(iconSize);
  });

  test('render content', () => {
    const content = <div className="xyz">xyz123</div>;
    const label = shallow(
      <LabelIcon iconContent={content}/>
    );
    const icon = label.find(Icon);

    expect(icon).toHaveLength(0);
    expect(label.find('.xyz')).toHaveLength(1);
  });

  test('render null', () => {
    const label = shallow(
      <LabelIcon/>
    );
    const icon = label.find(Icon);

    expect(icon).toHaveLength(0);
    expect(label.equals(null)).toBeTruthy();
  });

});
