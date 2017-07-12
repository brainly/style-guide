import React from 'react';
import Select, {VALIDATION} from './Select';
import {shallow, render} from 'enzyme';

const exampleOptions = [
  {value: 'test', text: 'test'},
  {value: 'test2', text: 'test2'}
];

test('render', () => {
  const button = shallow(
    <Select/>
  );

  expect(button.hasClass('sg-select')).toEqual(true);
});

test('render options', () => {
  const button = shallow(
    <Select options={exampleOptions}/>
  );

  expect(button.find('option')).toHaveLength(exampleOptions.length);
});

test('choose options', () => {
  const button = render(
    <Select options={exampleOptions} value={exampleOptions[1].value} onChange={() => undefined}/>
  );

  const option1st = button.find('option').get(0);
  const option2nd = button.find('option').get(1);

  expect(option1st.attribs.selected).toBeUndefined();
  expect(option2nd.attribs.selected).toBeDefined();
});

test('full width', () => {
  const button = shallow(
    <Select fullWidth={true}/>
  );

  expect(button.hasClass('sg-select--full-width')).toEqual(true);
});


test('default validation', () => {
  const button = shallow(
    <Select/>
  );

  expect(button.hasClass('sg-select--valid')).toEqual(false);
  expect(button.hasClass('sg-select--invalid')).toEqual(false);
});


test('valid', () => {
  const button = shallow(
    <Select valid={VALIDATION.VALID}/>
  );

  expect(button.hasClass('sg-select--valid')).toEqual(true);
  expect(button.hasClass('sg-select--invalid')).toEqual(false);
});


test('invalid', () => {
  const button = shallow(
    <Select valid={VALIDATION.INVALID}/>
  );

  expect(button.hasClass('sg-select--valid')).toEqual(false);
  expect(button.hasClass('sg-select--invalid')).toEqual(true);
});

