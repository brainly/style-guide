import * as React from 'react';
import Select from './Select';
import {render} from '@testing-library/react';

const exampleOptions = [
  {
    value: 'test',
    text: 'test',
  },
  {
    value: 'test2',
    text: 'test2',
  },
];
const exampleGroupedOptions = [
  {
    value: 'option1',
    text: 'Option1',
  },
  {
    value: 'option2',
    text: 'Select selector',
  },
  {
    label: 'Label text',
    options: [
      {
        value: 'option31',
        text: 'Option1',
      },
      {
        value: 'option32',
        text: 'Select selector',
      },
      {
        value: 'option33',
        text: 'Select selector',
      },
    ],
  },
  {
    value: 'option4',
    text: 'Select selector',
  },
];

const voidFunction = () => undefined;

test('render', () => {
  const select = render(<Select />);

  expect(
    select.container.firstElementChild.classList.contains('sg-select')
  ).toEqual(true);
});

test('render options', () => {
  const select = render(<Select options={exampleOptions} />);

  expect(select.queryAllByRole('option')).toHaveLength(exampleOptions.length);
});

test('render grouped options', () => {
  const select = render(<Select options={exampleGroupedOptions} />);

  expect(select.queryAllByRole('option')).toHaveLength(6);
  expect(select.queryByRole('group', {name: 'Label text'})).toBeTruthy();
});

test('choose options', () => {
  const select = render(
    <Select
      options={exampleOptions}
      value={exampleOptions[1].value}
      onChange={voidFunction}
    />
  );

  expect(
    select.queryAllByRole('option', {
      selected: false,
      name: 'test1',
    })
  ).toBeTruthy();
  expect(
    select.queryAllByRole('option', {
      selected: true,
      name: 'test2',
    })
  ).toBeTruthy();
});

test('full width', () => {
  const select = render(<Select fullWidth />);

  expect(
    select.container.firstElementChild.classList.contains(
      'sg-select--full-width'
    )
  ).toEqual(true);
});

test('default validation', () => {
  const select = render(<Select />);

  expect(
    select.container.firstElementChild.classList.contains('sg-select--valid')
  ).toEqual(false);
  expect(
    select.container.firstElementChild.classList.contains('sg-select--invalid')
  ).toEqual(false);
});

test('valid', () => {
  const select = render(<Select valid />);

  expect(
    select.container.firstElementChild.classList.contains('sg-select--valid')
  ).toEqual(true);
  expect(
    select.container.firstElementChild.classList.contains('sg-select--invalid')
  ).toEqual(false);
});

test('invalid', () => {
  const select = render(<Select invalid />);

  expect(
    select.container.firstElementChild.classList.contains('sg-select--valid')
  ).toEqual(false);
  expect(
    select.container.firstElementChild.classList.contains('sg-select--invalid')
  ).toEqual(true);
});

test('capitalized', () => {
  const select = render(<Select capitalized />);

  expect(
    select.container.firstElementChild.classList.contains(
      'sg-select--capitalized'
    )
  ).toEqual(true);
});

test('error when both valid and invalid', () => {
  expect(() => {
    render(<Select valid invalid />);
  }).toThrow();
});
