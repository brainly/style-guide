import React from 'react';
import Radio from './Radio';
import {shallow} from 'enzyme';

test('render', () => {
  const radio = shallow(
    <Radio/>
  );

  expect(radio.hasClass('sg-radio')).toEqual(true);
  expect(radio.find('input[type="radio"]')).toHaveLength(1);
});

test('not checked', () => {
  const radio = shallow(
    <Radio/>
  );
  const input = radio.find('input[type="radio"]');

  expect(input.props().checked).toBeFalsy();
});

test('checked', () => {
  const radio = shallow(
    <Radio checked={true}/>
  );
  const input = radio.find('input[type="radio"]');

  expect(input.props().checked).toBeTruthy();
});


test('unique ID by default', () => {
  const noOfRadio = 15;
  const arrayOfId = new Array(noOfRadio).fill(true).map(() => {
    const radio = shallow(
      <Radio/>
    );
    const input = radio.find('input[type="radio"]');

    return input.props().id;
  });

  expect(arrayOfId).toHaveLength(new Set(arrayOfId).size);
});


test('passing id', () => {
  const id = 'id_of_radio';
  const radio = shallow(
    <Radio id={id}/>
  );
  const input = radio.find('input[type="radio"]');

  expect(input.props().id).toEqual(id);
});

test('passing name', () => {
  const name = 'group_name';
  const radio = shallow(
    <Radio name={name}/>
  );
  const input = radio.find('input[type="radio"]');

  expect(input.props().name).toEqual(name);
});

