import React from 'react';
import Checkbox from './Checkbox';
import {shallow} from 'enzyme';

test('render', () => {
  const checkbox = shallow(
    <Checkbox />
  );

  expect(checkbox.hasClass('sg-checkbox')).toEqual(true);
  expect(checkbox.find('input[type="checkbox"]')).toHaveLength(1);
});

test('not checked', () => {
  const checkbox = shallow(
    <Checkbox />
  );
  const input = checkbox.find('input[type="checkbox"]');

  expect(input.props().checked).toBeFalsy();
});

test('checked', () => {
  const checkbox = shallow(
    <Checkbox checked />
  );
  const input = checkbox.find('input[type="checkbox"]');

  expect(input.props().checked).toBeTruthy();
});

test('unique ID by default', () => {
  const noOfCheckbox = 15;
  const arrayOfId = new Array(noOfCheckbox).fill(true).map(() => {
    const checkbox = shallow(
      <Checkbox />
    );
    const input = checkbox.find('input[type="checkbox"]');

    return input.props().id;
  });

  expect(arrayOfId).toHaveLength(new Set(arrayOfId).size);
});

test('passing id', () => {
  const id = 'id_of_checkbox';
  const checkbox = shallow(
    <Checkbox id={id} />
  );
  const input = checkbox.find('input[type="checkbox"]');

  expect(input.props().id).toEqual(id);
});

