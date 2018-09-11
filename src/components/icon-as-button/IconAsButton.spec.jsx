import React from 'react';
import IconAsButton, {TYPE, ICON_COLOR, SIZE} from './IconAsButton';
import Icon from 'icons/Icon';
import {shallow, mount} from 'enzyme';
import OverlayedBox from 'overlayed-box/OverlayedBox';

test('render', () => {
  const type = TYPE.STAR;
  const iconAsButton = shallow(
    <IconAsButton type={type} />
  );
  const icon = iconAsButton.find(Icon);

  expect(iconAsButton.hasClass('sg-icon-as-button')).toEqual(true);
  expect(icon).toHaveLength(1);
  expect(icon.props().type).toEqual(type);
});

test('render custom SVG', () => {
  const iconAsButton = shallow(
    <IconAsButton customSvg>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fillRule="nonzero" d="M8.45 1v4.84h3.57L6.5 18.74H2v4.85h12.9v-4.84h-3.56l5.52-12.9h4.5V1z" />
        </svg>
      </div>
    </IconAsButton>
  );
  const icon = iconAsButton.find(Icon);

  expect(iconAsButton.hasClass('sg-icon-as-button')).toEqual(true);
  expect(icon).toHaveLength(1);
  expect(icon.find('svg')).toHaveLength(1);
});

test('colors', () => {
  const type = TYPE.ANSWER;
  const color = ICON_COLOR.DARK;
  const iconAsButton = shallow(
    <IconAsButton type={type} color={color} />
  );

  expect(iconAsButton.hasClass('sg-icon-as-button--dark')).toEqual(true);
});

test('size', () => {
  const size = SIZE.SMALL;
  const sizeOfSmallIco = 18;
  const type = TYPE.ANSWER;
  const iconAsButton = shallow(
    <IconAsButton type={type} size={size} />
  );
  const icon = iconAsButton.find(Icon);

  expect(iconAsButton.hasClass('sg-icon-as-button--small')).toEqual(true);
  expect(icon.props().size).toEqual(sizeOfSmallIco);
});

test('default size', () => {
  const sizeOfNormallIco = 26;
  const type = TYPE.ANSWER;
  const iconAsButton = shallow(
    <IconAsButton type={type} />
  );
  const icon = iconAsButton.find(Icon);

  expect(iconAsButton.hasClass('sg-icon-as-button--normal')).toEqual(true);
  expect(icon.props().size).toEqual(sizeOfNormallIco);
});

test('border', () => {
  const type = TYPE.ANSWER;
  const iconAsButton = shallow(
    <IconAsButton type={type} border />
  );

  expect(iconAsButton.hasClass('sg-icon-as-button--with-border')).toEqual(true);
});

test('transparent', () => {
  const type = TYPE.ANSWER;
  const iconAsButton = shallow(
    <IconAsButton type={type} transparent />
  );

  expect(iconAsButton.hasClass('sg-icon-as-button--transparent')).toEqual(true);
});

test('transparent active', () => {
  const type = TYPE.ANSWER;
  const iconAsButton = shallow(
    <IconAsButton type={type} transparent active />
  );

  expect(iconAsButton.hasClass('sg-icon-as-button--transparent')).toEqual(true);
  expect(iconAsButton.hasClass('sg-icon-as-button--transparent-active')).toEqual(true);
});

test('action', () => {
  const type = TYPE.ANSWER;
  const iconAsButton = shallow(
    <IconAsButton type={type} action />
  );

  expect(iconAsButton.hasClass('sg-icon-as-button--action')).toEqual(true);
});

test('action active', () => {
  const type = TYPE.ANSWER;
  const iconAsButton = shallow(
    <IconAsButton type={type} action active />
  );

  expect(iconAsButton.hasClass('sg-icon-as-button--action')).toEqual(true);
  expect(iconAsButton.hasClass('sg-icon-as-button--action-active')).toEqual(true);
});

test('overlay', () => {
  const type = TYPE.ANSWER;
  const overlay = <div>abc</div>;
  const iconAsButton = mount(
    <IconAsButton type={type} overlay={overlay} />
  );

  const overlayedBox = iconAsButton.find(OverlayedBox);

  expect(overlayedBox).toHaveLength(1);
  expect(overlayedBox.find(Icon)).toHaveLength(1);
  expect(overlayedBox.props().overlay).toEqual(overlay);
});

test('no overlay', () => {
  const type = TYPE.ANSWER;
  const iconAsButton = mount(
    <IconAsButton type={type} />
  );

  const overlayedBox = iconAsButton.find(OverlayedBox);

  expect(overlayedBox).toHaveLength(0);
});

test('error when more than 1 child', () => {
  const spy = jest.spyOn(console, 'error');

  console.error = jest.fn();
  shallow(
    <IconAsButton>
      <div />
      <div />
    </IconAsButton>);
  expect(console.error.mock.calls).toHaveLength(2);

  spy.mockRestore();
});

test('link as button', () => {
  const type = TYPE.ANSWER;
  const href = 'http://brainly.test';

  const iconAsButton = shallow(
    <IconAsButton type={type} href={href} />
  );

  expect(iconAsButton.find('a')).toHaveLength(1);
});
