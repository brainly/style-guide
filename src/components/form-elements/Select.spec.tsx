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

it('render', () => {
  const select = render(<Select />);

  expect(select.getByRole('combobox')).toBeTruthy();
});

it('render options', () => {
  const select = render(<Select options={exampleOptions} />);

  expect(select.getAllByRole('option')).toHaveLength(exampleOptions.length);
});

it('render grouped options', () => {
  const select = render(<Select options={exampleGroupedOptions} />);

  expect(select.getAllByRole('option')).toHaveLength(6);
  expect(select.getByRole('group', {name: 'Label text'})).toBeTruthy();
});

it('choose options', () => {
  const select = render(
    <Select
      options={exampleOptions}
      value={exampleOptions[1].value}
      onChange={voidFunction}
    />
  );

  expect(
    select.getAllByRole('option', {
      selected: false,
      name: 'test',
    })
  ).toBeTruthy();
  expect(
    select.getAllByRole('option', {
      selected: true,
      name: 'test2',
    })
  ).toBeTruthy();
});

it('error when both valid and invalid', () => {
  expect(() => {
    render(<Select valid invalid />);
  }).toThrow();
});
