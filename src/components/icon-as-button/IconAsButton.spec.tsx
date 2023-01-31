import * as React from 'react';
import IconAsButton, {TYPE, ICON_COLOR, SIZE} from './IconAsButton';
import Icon from 'icons/Icon';
import {render} from '@testing-library/react';

test('render', () => {
  const type = TYPE.STAR;
  const iconAsButton = render(<IconAsButton type={type} />);

  expect(iconAsButton.queryByRole('img')).toBeTruthy();
});

test('colors', () => {
  const type = TYPE.ANSWER;
  const color = ICON_COLOR['icon-black'];
  const iconAsButton = render(<IconAsButton type={type} color={color} />);

  expect(
    iconAsButton.container.firstElementChild.classList.contains(
      'sg-icon-as-button--icon-black'
    )
  ).toEqual(true);
});

test('size', () => {
  const size = SIZE.SMALL;
  const type = TYPE.ANSWER;
  const iconAsButton = render(<IconAsButton type={type} size={size} />);

  expect(
    iconAsButton.container.firstElementChild.classList.contains(
      'sg-icon-as-button--small'
    )
  ).toEqual(true);
});

test('default size', () => {
  const type = TYPE.ANSWER;
  const iconAsButton = render(<IconAsButton type={type} />);

  expect(
    iconAsButton.container.firstElementChild.classList.contains(
      'sg-icon-as-button--normal'
    )
  ).toEqual(true);
});

test('border', () => {
  const type = TYPE.ANSWER;
  const iconAsButton = render(<IconAsButton type={type} border />);

  expect(
    iconAsButton.container.firstElementChild.classList.contains(
      'sg-icon-as-button--with-border'
    )
  ).toEqual(true);
});

test('transparent', () => {
  const type = TYPE.ANSWER;
  const iconAsButton = render(<IconAsButton type={type} transparent />);

  expect(
    iconAsButton.container.firstElementChild.classList.contains(
      'sg-icon-as-button--transparent'
    )
  ).toEqual(true);
});

test('transparent active', () => {
  const type = TYPE.ANSWER;
  const iconAsButton = render(<IconAsButton type={type} transparent active />);

  expect(
    iconAsButton.container.firstElementChild.classList.contains(
      'sg-icon-as-button--transparent'
    )
  ).toEqual(true);
  expect(
    iconAsButton.container.firstElementChild.classList.contains(
      'sg-icon-as-button--transparent-active'
    )
  ).toEqual(true);
});

test('action', () => {
  const type = TYPE.ANSWER;
  const iconAsButton = render(<IconAsButton type={type} action />);

  expect(
    iconAsButton.container.firstElementChild.classList.contains(
      'sg-icon-as-button--action'
    )
  ).toEqual(true);
});

test('action active', () => {
  const type = TYPE.ANSWER;
  const iconAsButton = render(<IconAsButton type={type} action active />);

  expect(
    iconAsButton.container.firstElementChild.classList.contains(
      'sg-icon-as-button--action'
    )
  ).toEqual(true);
  expect(
    iconAsButton.container.firstElementChild.classList.contains(
      'sg-icon-as-button--action-active'
    )
  ).toEqual(true);
});

test('link as button', () => {
  const type = TYPE.ANSWER;
  const href = 'http://brainly.test';
  const iconAsButton = render(<IconAsButton type={type} href={href} />);

  expect(iconAsButton.queryByRole('button')).toBeTruthy();
});
