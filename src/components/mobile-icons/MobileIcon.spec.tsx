import * as React from 'react';
import MobileIcon, {TYPE, ICON_COLOR} from './MobileIcon';
import {render} from '@testing-library/react';

test('render if type', () => {
  const icon = render(<MobileIcon type={TYPE.ANSWER_BUBBLE} />);

  expect(icon.container.firstElementChild.tagName).toEqual('svg');
  expect(icon.container.firstElementChild.querySelector('use')).toBeTruthy();
});

test('type passed to xlink:href', () => {
  const type = TYPE.ANSWER_BUBBLE;
  const icon = render(<MobileIcon type={type} />);
  const use = icon.container.firstElementChild.querySelector('use');

  expect(use.getAttribute('xlink:href')).toEqual(`#icon-mobile-${type}`);
});

test('colors', () => {
  const type = TYPE.ANSWER_BUBBLE;
  const color = ICON_COLOR['icon-black'];
  const icon = render(<MobileIcon type={type} color={color} />);

  expect(
    icon.container.firstElementChild.classList.contains(
      `sg-mobile-icon--${color}`
    )
  ).toEqual(true);
});

test('size', () => {
  const size = 10;
  const type = TYPE.ANSWER_BUBBLE;
  const icon = render(<MobileIcon type={type} size={size} />);

  expect(
    icon.container.firstElementChild.classList.contains(
      `sg-mobile-icon--x${size}`
    )
  ).toEqual(true);
});

test('other props', () => {
  const type = TYPE.ANSWER_BUBBLE;
  const icon = render(<MobileIcon type={type} data-foo="bar" />);

  expect(icon.container.firstElementChild.getAttribute('data-foo')).toEqual(
    'bar'
  );
});
