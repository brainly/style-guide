import React from 'react';
import BoxDeprecated, {COLOR, PADDING, CLOSE_ICON_COLOR} from './Box';
import Icon from '../icons/Icon';
import {shallow} from 'enzyme';

test('render', () => {
  const box = shallow(<BoxDeprecated>some text</BoxDeprecated>);

  expect(box.hasClass('sg-box-deprecated')).toEqual(true);
});

test('colors', () => {
  const color = COLOR.LAVENDER;
  const box = shallow(<BoxDeprecated color={color}>some text</BoxDeprecated>);

  expect(box.hasClass(`sg-box-deprecated--${color}`)).toEqual(true);
});

test('shadow', () => {
  const boxComponent = <BoxDeprecated shadow>some text</BoxDeprecated>;
  const box = shallow(boxComponent);

  expect(boxComponent.props.shadow).toEqual(true);
  expect(box.hasClass('sg-box-deprecated--with-shadow')).toEqual(true);
});

test('border', () => {
  const boxComponent = <BoxDeprecated border>some text</BoxDeprecated>;
  const box = shallow(boxComponent);

  expect(boxComponent.props.border).toEqual(true);
  expect(box.hasClass('sg-box-deprecated--no-border')).toEqual(false);
});

test('border', () => {
  const boxComponent = <BoxDeprecated border={false}>some text</BoxDeprecated>;
  const box = shallow(boxComponent);

  expect(boxComponent.props.border).toEqual(false);
  expect(box.hasClass('sg-box-deprecated--no-border')).toEqual(true);
});

test('no colors => default border on ', () => {
  const boxComponent = <BoxDeprecated>some text</BoxDeprecated>;
  const box = shallow(boxComponent);

  expect(box.hasClass('sg-box-deprecated--no-border')).toEqual(false);
});

test('colors => default border off', () => {
  const color = COLOR.LAVENDER;
  const box = shallow(<BoxDeprecated color={color}>some text</BoxDeprecated>);

  expect(box.hasClass('sg-box-deprecated--no-border')).toEqual(true);
});

test('default padding', () => {
  const box = shallow(<BoxDeprecated>some text</BoxDeprecated>);

  expect(box.hasClass(`sg-box-deprecated--${PADDING.LARGE}`)).toEqual(false);
  expect(box.hasClass(`sg-box-deprecated--${PADDING.SMALL}`)).toEqual(false);
  expect(box.hasClass(`sg-box-deprecated--${PADDING.XSMALL}`)).toEqual(false);
  expect(box.hasClass(`sg-box-deprecated--${PADDING.XXSMALL}`)).toEqual(false);
});

test('small padding', () => {
  const padding = PADDING.SMALL;
  const box = shallow(
    <BoxDeprecated padding={padding}>some text</BoxDeprecated>
  );

  expect(box.hasClass('sg-box-deprecated--small-padding')).toEqual(true);
});

test('xsmall padding', () => {
  const padding = PADDING.XSMALL;
  const box = shallow(
    <BoxDeprecated padding={padding}>some text</BoxDeprecated>
  );

  expect(box.hasClass('sg-box-deprecated--xsmall-padding')).toEqual(true);
});

test('xxsmall padding', () => {
  const padding = PADDING.XXSMALL;
  const box = shallow(
    <BoxDeprecated padding={padding}>some text</BoxDeprecated>
  );

  expect(box.hasClass('sg-box-deprecated--xxsmall-padding')).toEqual(true);
});

test('large padding', () => {
  const padding = PADDING.LARGE;
  const box = shallow(
    <BoxDeprecated padding={padding}>some text</BoxDeprecated>
  );

  expect(box.hasClass('sg-box-deprecated--large-padding')).toEqual(true);
});

test('no min height', () => {
  const box = shallow(<BoxDeprecated noMinHeight>some text</BoxDeprecated>);

  expect(box.hasClass('sg-box-deprecated--no-min-height')).toEqual(true);
});

test('full width', () => {
  const box = shallow(<BoxDeprecated full>some text</BoxDeprecated>);

  expect(box.hasClass('sg-box-deprecated--full')).toEqual(true);
});

test('close button', () => {
  const mockCallback = jest.fn();
  const box = shallow(<BoxDeprecated onClose={mockCallback} />);

  expect(box.find('.sg-box-deprecated__close')).toHaveLength(1);
});

test('light close button', () => {
  const mockCallback = jest.fn();
  const box = shallow(
    <BoxDeprecated
      closeIconColor={CLOSE_ICON_COLOR.LIGHT}
      onClose={mockCallback}
    />
  );

  expect(box.find('.sg-box-deprecated__close')).toHaveLength(1);
  expect(box.find('div').find(Icon)).toHaveLength(1);
  expect(
    box
      .find('div')
      .find(Icon)
      .props().color
  ).toEqual('light');
});

test('clicking on close button calls onClose', () => {
  const mockCallback = jest.fn();
  const box = shallow(<BoxDeprecated onClose={mockCallback} />);

  const closeDivNode = box.find('.sg-box-deprecated__close');

  closeDivNode.simulate('click');

  expect(mockCallback).toHaveBeenCalled();
});

test('image container', () => {
  const imgSrc = 'https://source.unsplash.com/100x100/?man';

  const box = shallow(<BoxDeprecated imgSrc={imgSrc} />);

  expect(box.hasClass('sg-box-deprecated--image-wrapper')).toEqual(true);
  expect(box.find('.sg-box-deprecated__image')).toHaveLength(1);
  expect(box.find('.sg-box-deprecated__hole')).toHaveLength(0);
});

test('standard box, no image container', () => {
  const box = shallow(<BoxDeprecated>some text</BoxDeprecated>);

  expect(box.hasClass('sg-box-deprecated--image-wrapper')).toEqual(false);
  expect(box.find('.sg-box-deprecated__image')).toHaveLength(0);
  expect(box.find('.sg-box-deprecated__hole')).toHaveLength(1);
});
