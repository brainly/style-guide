import React from 'react';
import LabelDeprecated, {
  SIZE,
  ICON_COLOR,
  ICON_TYPE,
  ICON_SIZE,
  LabelIcon,
} from './LabelDeprecated';
import Icon from 'icons/Icon';
import {shallow} from 'enzyme';

describe('LabelDeprecated', () => {
  test('render', () => {
    const iconType = ICON_TYPE.STAR;
    const label = shallow(<LabelDeprecated iconType={iconType} text="test" />);
    const icon = label.find(LabelIcon);
    const textLabel = label.find('label.sg-label-deprecated__text');

    expect(label.hasClass('sg-label-deprecated')).toEqual(true);
    expect(textLabel).toHaveLength(1);
    expect(icon).toHaveLength(1);
    expect(icon.props().iconType).toEqual(iconType);
  });

  test('icon color', () => {
    const iconType = ICON_TYPE.HEART;
    const iconColor = ICON_COLOR.LAVENDER;
    const label = shallow(
      <LabelDeprecated iconType={iconType} iconColor={iconColor} text="test" />
    );
    const icon = label.find(LabelIcon);

    expect(icon.props().iconColor).toEqual(iconColor);
  });

  test('size', () => {
    const size = SIZE.SMALL;
    const iconType = ICON_TYPE.HEART;
    const label = shallow(
      <LabelDeprecated iconType={iconType} size={size} text="test" />
    );
    const icon = label.find(LabelIcon);

    expect(label.hasClass('sg-label-deprecated--small')).toEqual(true);
    expect(icon.props().iconSize).toEqual(ICON_SIZE[size]);
  });

  test('default size', () => {
    const size = SIZE.NORMAL;
    const iconType = ICON_TYPE.HEART;
    const label = shallow(
      <LabelDeprecated iconType={iconType} size={size} text="test" />
    );
    const icon = label.find(LabelIcon);

    expect(label.hasClass('sg-label-deprecated--small')).toEqual(false);
    expect(label.hasClass('sg-label-deprecated--large')).toEqual(false);
    expect(icon.props().iconSize).toEqual(ICON_SIZE[size]);
  });

  test('secondary label', () => {
    const label = shallow(<LabelDeprecated secondary text="test" />);

    expect(label.hasClass('sg-label-deprecated--secondary')).toEqual(true);
  });

  test('emphasised', () => {
    const label = shallow(<LabelDeprecated emphasised text="test" />);

    expect(label.hasClass('sg-label-deprecated--emphasised')).toEqual(true);
  });

  test('elements to top', () => {
    const iconType = ICON_TYPE.HEART;
    const label = shallow(
      <LabelDeprecated iconType={iconType} elementsToTop text="test" />
    );

    expect(label.hasClass('sg-label-deprecated--elements-to-the-top')).toEqual(true);
  });

  test('label with no text', () => {
    const iconType = ICON_TYPE.HEART;
    const label = shallow(<LabelDeprecated iconType={iconType} />);
    const textLabel = label.find('div.sg-label-deprecated__text');

    expect(textLabel).toHaveLength(0);
  });

  test('label with a number', () => {
    const label = shallow(<LabelDeprecated secondary text="test" number={23} />);
    const numberLabel = label.find('div.sg-label-deprecated__number');

    expect(numberLabel).toHaveLength(1);

    const label2 = shallow(<LabelDeprecated secondary text="test" number={0} />);
    const numberLabel2 = label2.find('div.sg-label-deprecated__number');

    expect(numberLabel2).toHaveLength(1);
  });

  test('passing children', () => {
    const element = <div className="smth123">xyz</div>;
    const label = shallow(<Label>{element}</Label>);

    expect(label.find('div.smth123')).toHaveLength(1);
  });
});

describe('LabelIcon', () => {
  test('render icon and pass props', () => {
    const iconType = ICON_TYPE.STAR;
    const iconColor = ICON_COLOR.BLUE;
    const iconSize = 10;
    const label = shallow(
      <LabelIcon
        iconType={iconType}
        iconColor={iconColor}
        iconSize={iconSize}
      />
    );
    const icon = label.find(Icon);

    expect(icon).toHaveLength(1);
    expect(icon.props().type).toEqual(iconType);
    expect(icon.props().color).toEqual(iconColor);
    expect(icon.props().size).toEqual(iconSize);
  });

  test('render content', () => {
    const content = <div className="xyz">xyz123</div>;
    const label = shallow(<LabelIcon iconContent={content} />);
    const icon = label.find(Icon);

    expect(icon).toHaveLength(0);
    expect(label.find('.xyz')).toHaveLength(1);
  });

  test('render null', () => {
    const label = shallow(<LabelIcon />);
    const icon = label.find(Icon);

    expect(icon).toHaveLength(0);
    expect(label.equals(null)).toBeTruthy();
  });
});
