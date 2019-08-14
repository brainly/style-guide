import React from 'react';
import Box, {COLOR, PADDING, CLOSE_ICON_COLOR} from './Box';
import Icon from '../icons/Icon';
import {shallow} from 'enzyme';

test('render', () => {
  const box = shallow(<Box>some text</Box>);

  expect(box.hasClass('sg-box')).toEqual(true);
});

test('colors', () => {
  const color = COLOR.LAVENDER;
  const box = shallow(<Box color={color}>some text</Box>);

  expect(box.hasClass(`sg-box--${color}`)).toEqual(true);
});

test('shadow', () => {
  const boxComponent = <Box shadow>some text</Box>;
  const box = shallow(boxComponent);

  expect(boxComponent.props.shadow).toEqual(true);
  expect(box.hasClass('sg-box--with-shadow')).toEqual(true);
});

test('border', () => {
  const boxComponent = <Box border>some text</Box>;
  const box = shallow(boxComponent);

  expect(boxComponent.props.border).toEqual(true);
  expect(box.hasClass('sg-box--no-border')).toEqual(false);
});

test('border', () => {
  const boxComponent = <Box border={false}>some text</Box>;
  const box = shallow(boxComponent);

  expect(boxComponent.props.border).toEqual(false);
  expect(box.hasClass('sg-box--no-border')).toEqual(true);
});

test('no colors => default border on ', () => {
  const boxComponent = <Box>some text</Box>;
  const box = shallow(boxComponent);

  expect(box.hasClass('sg-box--no-border')).toEqual(false);
});

test('colors => default border off', () => {
  const color = COLOR.LAVENDER;
  const box = shallow(<Box color={color}>some text</Box>);

  expect(box.hasClass('sg-box--no-border')).toEqual(true);
});

test('default padding', () => {
  const box = shallow(<Box>some text</Box>);

  expect(box.hasClass(`sg-box--${PADDING.LARGE}`)).toEqual(false);
  expect(box.hasClass(`sg-box--${PADDING.SMALL}`)).toEqual(false);
  expect(box.hasClass(`sg-box--${PADDING.XSMALL}`)).toEqual(false);
  expect(box.hasClass(`sg-box--${PADDING.XXSMALL}`)).toEqual(false);
});

test('small padding', () => {
  const padding = PADDING.SMALL;
  const box = shallow(<Box padding={padding}>some text</Box>);

  expect(box.hasClass('sg-box--small-padding')).toEqual(true);
});

test('xsmall padding', () => {
  const padding = PADDING.XSMALL;
  const box = shallow(<Box padding={padding}>some text</Box>);

  expect(box.hasClass('sg-box--xsmall-padding')).toEqual(true);
});

test('xxsmall padding', () => {
  const padding = PADDING.XXSMALL;
  const box = shallow(<Box padding={padding}>some text</Box>);

  expect(box.hasClass('sg-box--xxsmall-padding')).toEqual(true);
});

test('large padding', () => {
  const padding = PADDING.LARGE;
  const box = shallow(<Box padding={padding}>some text</Box>);

  expect(box.hasClass('sg-box--large-padding')).toEqual(true);
});

test('no min height', () => {
  const box = shallow(<Box noMinHeight>some text</Box>);

  expect(box.hasClass('sg-box--no-min-height')).toEqual(true);
});

test('full width', () => {
  const box = shallow(<Box full>some text</Box>);

  expect(box.hasClass('sg-box--full')).toEqual(true);
});

test('close button', () => {
  const mockCallback = jest.fn();
  const box = shallow(<Box onClose={mockCallback} />);

  expect(box.find('.sg-box__close')).toHaveLength(1);
});

test('light close button', () => {
  const mockCallback = jest.fn();
  const box = shallow(
    <Box closeIconColor={CLOSE_ICON_COLOR.LIGHT} onClose={mockCallback} />
  );

  expect(box.find('.sg-box__close')).toHaveLength(1);
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
  const box = shallow(<Box onClose={mockCallback} />);

  const closeDivNode = box.find('.sg-box__close');

  closeDivNode.simulate('click');

  expect(mockCallback).toHaveBeenCalled();
});

test('image container', () => {
  const imgSrc = 'https://source.unsplash.com/100x100/?man';

  const box = shallow(<Box imgSrc={imgSrc} />);

  expect(box.hasClass('sg-box--image-wrapper')).toEqual(true);
  expect(box.find('.sg-box__image')).toHaveLength(1);
  expect(box.find('.sg-box__hole')).toHaveLength(0);
});

test('standard box, no image container', () => {
  const box = shallow(<Box>some text</Box>);

  expect(box.hasClass('sg-box--image-wrapper')).toEqual(false);
  expect(box.find('.sg-box__image')).toHaveLength(0);
  expect(box.find('.sg-box__hole')).toHaveLength(1);
});
