import * as React from 'react';
import {Icon} from '../..';
import Button, {BUTTON_VARIANT} from './Button';
import {render} from '@testing-library/react';

test('render', () => {
  const button = render(<Button>Some text</Button>);
  const root = button.container.firstElementChild;

  expect(root.classList.contains('sg-button')).toEqual(true);
});

test('variant', () => {
  const buttonVariant = BUTTON_VARIANT.SOLID;
  const button = render(<Button variant={buttonVariant}>Some text</Button>);
  const root = button.container.firstElementChild;

  expect(root.classList.contains(`sg-button--${buttonVariant}`)).toEqual(true);
});

test('disabled', () => {
  const button = render(<Button disabled>Some text</Button>);
  const root = button.container.firstElementChild;

  expect(root.classList.contains('sg-button--disabled')).toEqual(true);
  expect(root.hasAttribute('disabled')).toEqual(true);
});

test('not disabled', () => {
  const button = render(<Button>Some text</Button>);
  const root = button.container.firstElementChild;

  expect(root.classList.contains('sg-button--disabled')).toEqual(false);
  expect(root.hasAttribute('disabled')).toEqual(false);
});

test('full width', () => {
  const button = render(<Button fullWidth>Some text</Button>);
  const root = button.container.firstElementChild;

  expect(root.classList.contains('sg-button--full-width')).toEqual(true);
});

test('icon', () => {
  const icon = <span>Button icon</span>;
  const button = render(<Button icon={icon}>Some text</Button>);

  expect(button.getByText('Button icon')).toBeTruthy();
});

test('icon only', () => {
  const icon = <span>Button icon</span>;
  const button = render(
    <Button icon={icon} iconOnly>
      Some text
    </Button>
  );
  const root = button.container.firstElementChild;

  expect(button.getByText('Button icon')).toBeTruthy();
  expect(root.classList.contains('sg-button--icon-only')).toBe(true);
});

test('toggle', () => {
  const button = render(
    <Button variant="solid-light" toggle="red">
      Some text
    </Button>
  );

  const root = button.container.firstElementChild;

  expect(root.classList.contains('sg-button--solid-light-toggle-red')).toEqual(
    true
  );
});

test('with icon - reversed order', () => {
  const icon = <span>Button icon</span>;
  const button = render(
    <Button icon={icon} reversedOrder>
      Some text
    </Button>
  );
  const root = button.container.firstElementChild;

  expect(button.getByText('Button icon')).toBeTruthy();
  expect(root.classList.contains('sg-button--reversed-order')).toBe(true);
});

test('in loading state button shows spinner while hiding label and icon', () => {
  const button = render(
    <Button loading icon={<Icon type="heart" size={24} color="adaptive" />}>
      Some text
    </Button>
  );
  const root = button.container.firstElementChild;

  expect(root.classList.contains('sg-button--loading')).toEqual(true);
  expect(button.getByRole('status')).toBeTruthy();
});
