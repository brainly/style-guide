import * as React from 'react';
import ButtonRound from './ButtonRound';
import {render} from '@testing-library/react';

test('render', () => {
  const button = render(<ButtonRound>Some text</ButtonRound>);

  expect(button.hasClass('sg-button-solid-round')).toEqual(true);
});
test('href', () => {
  const href = '#test';
  const button = render(<ButtonRound href={href}>Some text</ButtonRound>);

  expect(button.is(`[href="${href}"]`)).toEqual(true);
});
test('label', () => {
  const label = 'example label';
  const button = render(<ButtonRound label={label}>Some text</ButtonRound>);

  expect(button.contains(label)).toEqual(true);
  expect(button.find('.sg-button-solid-round__label')).toHaveLength(1);
});
test('no label', () => {
  const button = render(<ButtonRound>Some text</ButtonRound>);

  expect(button.find('sg-button-solid-round__label')).toHaveLength(0);
});
test('func', () => {
  let counter = 0;

  const onClick = () => counter++;

  const button = render(
    // eslint-disable-next-line react/jsx-no-bind
    <ButtonRound onClick={onClick}>Some text</ButtonRound>
  );

  expect(counter).toEqual(0);
  button.simulate('click');
  expect(counter).toEqual(1);
});
test('func throw testing 1part - undefined function', () => {
  const button = render(<ButtonRound>Some text</ButtonRound>);

  expect(() => button.simulate('click')).not.toThrow();
  const button2 = render(
    <ButtonRound onClick={undefined}>Some text</ButtonRound>
  );

  expect(() => button2.simulate('click')).not.toThrow();
});
test('func throw testing 2part - defined bad type', () => {
  const spy = jest.spyOn(console, 'error');

  console['error'] = jest.fn();
  const notFunctionObject = 'there should be func not string';
  const button = render(
    // @ts-expect-error
    <ButtonRound onClick={notFunctionObject}>Some text</ButtonRound>
  );

  expect(() => button.simulate('click')).toThrow();
  spy.mockRestore();
});
