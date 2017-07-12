import React from 'react';
import Textarea, {SIZE, VALIDATION} from './Textarea';
import {shallow} from 'enzyme';

test('render', () => {
  const button = shallow(
    <Textarea/>
  );

  expect(button.hasClass('sg-textarea')).toEqual(true);
});

test('full width', () => {
  const button = shallow(
    <Textarea fullWidth={true}/>
  );

  expect(button.hasClass('sg-textarea--full-width')).toEqual(true);
});

test('auto height', () => {
  const button = shallow(
    <Textarea autoHeight={true}/>
  );

  expect(button.hasClass('sg-textarea--auto-height')).toEqual(true);
});

test('simple', () => {
  const button = shallow(
    <Textarea simple={true}/>
  );

  expect(button.hasClass('sg-textarea--simple')).toEqual(true);
});


test('default validation', () => {
  const button = shallow(
    <Textarea/>
  );

  expect(button.hasClass('sg-textarea--valid')).toEqual(false);
  expect(button.hasClass('sg-textarea--invalid')).toEqual(false);
});


test('valid', () => {
  const button = shallow(
    <Textarea valid={VALIDATION.VALID}/>
  );

  expect(button.hasClass('sg-textarea--valid')).toEqual(true);
  expect(button.hasClass('sg-textarea--invalid')).toEqual(false);
});


test('invalid', () => {
  const button = shallow(
    <Textarea valid={VALIDATION.INVALID}/>
  );

  expect(button.hasClass('sg-textarea--valid')).toEqual(false);
  expect(button.hasClass('sg-textarea--invalid')).toEqual(true);
});


test('size', () => {
  const button = shallow(
    <Textarea size={SIZE.SHORT}/>
  );

  expect(button.hasClass('sg-textarea--short')).toEqual(true);
});


test('default size', () => {
  const button = shallow(
    <Textarea/>
  );

  expect(button.hasClass('sg-textarea--normal')).toEqual(false);
  expect(button.hasClass('sg-textarea--short')).toEqual(false);
});
