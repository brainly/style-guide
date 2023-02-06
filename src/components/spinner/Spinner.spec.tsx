import * as React from 'react';
import Spinner, {SPINNER_SIZE, SPINNER_COLOR} from './Spinner';
import {render} from '@testing-library/react';

test('render', () => {
  const component = render(<Spinner />);

  expect(component.queryByRole('status')).toBeTruthy();
});

test('SPINNER_SIZE', () => {
  const size = SPINNER_SIZE.XSMALL;
  const component = render(<Spinner size={size} />);

  expect(
    component.container.firstElementChild.classList.contains(
      'sg-spinner--xsmall'
    )
  ).toEqual(true);
});

test('colors', () => {
  Object.values(SPINNER_COLOR).forEach(color => {
    const component = render(<Spinner color={color} />);

    expect(
      component.container.firstElementChild.classList.contains(
        `sg-spinner--${color}`
      )
    ).toEqual(true);
  });
});

test('className', () => {
  const testclass = 'mati-love-4-ever';
  const component = render(<Spinner className={testclass} />);

  expect(
    component.container.firstElementChild.classList.contains(`${testclass}`)
  ).toEqual(true);
});
