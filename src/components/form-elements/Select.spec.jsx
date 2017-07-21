import React from 'react';
import Select from './Select';
import {shallow, render} from 'enzyme';

const exampleOptions = [
  {value: 'test', text: 'test'},
  {value: 'test2', text: 'test2'}
];

test('render', () => {
  const select = shallow(
    <Select/>
  );

  expect(select.hasClass('sg-select')).toEqual(true);
});

test('render options', () => {
  const select = shallow(
    <Select options={exampleOptions}/>
  );

  expect(select.find('option')).toHaveLength(exampleOptions.length);
});

test('choose options', () => {
  const select = render(
    <Select options={exampleOptions} value={exampleOptions[1].value} onChange={() => undefined}/>
  );

  const option1st = select.find('option').get(0);
  const option2nd = select.find('option').get(1);

  expect(option1st.attribs.selected).toBeUndefined();
  expect(option2nd.attribs.selected).toBeDefined();
});

test('full width', () => {
  const select = shallow(
    <Select fullWidth={true}/>
  );

  expect(select.hasClass('sg-select--full-width')).toEqual(true);
});


test('default validation', () => {
  const select = shallow(
    <Select/>
  );

  expect(select.hasClass('sg-select--valid')).toEqual(false);
  expect(select.hasClass('sg-select--invalid')).toEqual(false);
});


test('valid', () => {
  const select = shallow(
    <Select valid={true}/>
  );

  expect(select.hasClass('sg-select--valid')).toEqual(true);
  expect(select.hasClass('sg-select--invalid')).toEqual(false);
});


test('invalid', () => {
  const select = shallow(
    <Select invalid={true}/>
  );

  expect(select.hasClass('sg-select--valid')).toEqual(false);
  expect(select.hasClass('sg-select--invalid')).toEqual(true);
});


test('error when both valid and invalid', () => {
  expect(() => {
    shallow(<Select valid={true} invalid={true}/>);
  }).toThrow();
});
