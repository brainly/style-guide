import React from 'react';
import Label, {SIZE, ICON_COLOR, ICON_TYPE} from './Label';
import Icon from '../icons/Icon';
import {shallow} from 'enzyme';

test('render', () => {
  const iconType = ICON_TYPE.STAR;
  const label = shallow(
    <Label iconType={iconType} text="test"/>
  );
  const icon = label.find(Icon);
  const textLabel = label.find('div.sg-label__text');

  expect(label.hasClass('sg-label')).toEqual(true);
  expect(textLabel).toHaveLength(1);
  expect(icon).toHaveLength(1);
  expect(icon.props().type).toEqual(iconType);
});

test('error when no icon type', () => {
  const spy = jest.spyOn(console, 'error');

  console.error = jest.fn();
  shallow(<Label text="test"/>);
  expect(console.error.mock.calls).toHaveLength(2);

  spy.mockRestore();
});

test('error when no text', () => {
  const spy = jest.spyOn(console, 'error');

  console.error = jest.fn();
  shallow(<Label iconType={ICON_TYPE.STAR}/>);
  expect(console.error.mock.calls).toHaveLength(1);

  spy.mockRestore();
});

test('icon color', () => {
  const iconType = ICON_TYPE.HEART;
  const iconColor = ICON_COLOR.LAVENDER;
  const label = shallow(
    <Label iconType={iconType} iconColor={iconColor} text="test"/>
  );
  const icon = label.find(Icon);

  expect(icon.props().color).toEqual(iconColor);
});

test('size', () => {
  const size = SIZE.SMALL;
  const iconType = ICON_TYPE.HEART;
  const label = shallow(
    <Label iconType={iconType} size={size} text="test"/>
  );
  const icon = label.find(Icon);

  expect(label.hasClass('sg-label--small')).toEqual(true);
  expect(icon.props().size).toEqual(size.ICON_SIZE);
});

test('default size', () => {
  const size = SIZE.NORMAL;
  const iconType = ICON_TYPE.HEART;
  const label = shallow(
    <Label iconType={iconType} size={size} text="test"/>
  );
  const icon = label.find(Icon);

  expect(label.hasClass('sg-label--small')).toEqual(false);
  expect(label.hasClass('sg-label--large')).toEqual(false);
  expect(icon.props().size).toEqual(size.ICON_SIZE);
});

test('secondary label', () => {
  const iconType = ICON_TYPE.HEART;
  const label = shallow(
    <Label iconType={iconType} secondary={true} text="test"/>
  );

  expect(label.hasClass('sg-label--secondary')).toEqual(true);
});

test('emphasised', () => {
  const iconType = ICON_TYPE.HEART;
  const label = shallow(
    <Label iconType={iconType} emphasised={true} text="test"/>
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

test('label with a number', () => {
  const iconType = ICON_TYPE.HEART;
  const label = shallow(
    <Label iconType={iconType} secondary={true} text="test" number={23}/>
  );
  const numberLabel = label.find('div.sg-label__number');

  expect(numberLabel).toHaveLength(1);
});
