import * as React from 'react';
import IconAsButton, {TYPE, ICON_COLOR, SIZE} from './IconAsButton';
import {render} from '@testing-library/react';

it('render', () => {
  const type = TYPE.STAR;
  const iconAsButton = render(<IconAsButton type={type} />);

  expect(iconAsButton.queryByRole('img')).toBeTruthy();
});

it('colors', () => {
  const type = TYPE.ANSWER;
  const color = ICON_COLOR['icon-black'];
  const iconAsButton = render(<IconAsButton type={type} color={color} />);

  expect(
    iconAsButton.container.firstElementChild.classList.contains(
      'sg-icon-as-button--icon-black'
    )
  ).toEqual(true);
});

it('size', () => {
  const size = SIZE.SMALL;
  const type = TYPE.ANSWER;
  const iconAsButton = render(<IconAsButton type={type} size={size} />);

  expect(
    iconAsButton.container.firstElementChild.classList.contains(
      'sg-icon-as-button--small'
    )
  ).toEqual(true);
});

it('default size', () => {
  const type = TYPE.ANSWER;
  const iconAsButton = render(<IconAsButton type={type} />);

  expect(
    iconAsButton.container.firstElementChild.classList.contains(
      'sg-icon-as-button--normal'
    )
  ).toEqual(true);
});

it('border', () => {
  const type = TYPE.ANSWER;
  const iconAsButton = render(<IconAsButton type={type} border />);

  expect(
    iconAsButton.container.firstElementChild.classList.contains(
      'sg-icon-as-button--with-border'
    )
  ).toEqual(true);
});

it('transparent', () => {
  const type = TYPE.ANSWER;
  const iconAsButton = render(<IconAsButton type={type} transparent />);

  expect(
    iconAsButton.container.firstElementChild.classList.contains(
      'sg-icon-as-button--transparent'
    )
  ).toEqual(true);
});

it('transparent active', () => {
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

it('action', () => {
  const type = TYPE.ANSWER;
  const iconAsButton = render(<IconAsButton type={type} action />);

  expect(
    iconAsButton.container.firstElementChild.classList.contains(
      'sg-icon-as-button--action'
    )
  ).toEqual(true);
});

it('action active', () => {
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

it('link as button', () => {
  const type = TYPE.ANSWER;
  const href = 'http://brainly.test';
  const iconAsButton = render(<IconAsButton type={type} href={href} />);

  expect(iconAsButton.queryByRole('button')).toBeTruthy();
});
