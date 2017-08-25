import React from 'react';
import Textarea, {SIZE} from './Textarea';
import {shallow} from 'enzyme';

test('render', () => {
  const textarea = shallow(
    <Textarea />
  );

  expect(textarea.hasClass('sg-textarea')).toEqual(true);
});

test('full width', () => {
  const textarea = shallow(
    <Textarea fullWidth />
  );

  expect(textarea.hasClass('sg-textarea--full-width')).toEqual(true);
});

test('auto height', () => {
  const textarea = shallow(
    <Textarea autoHeight />
  );

  expect(textarea.hasClass('sg-textarea--auto-height')).toEqual(true);
});

test('simple', () => {
  const textarea = shallow(
    <Textarea simple />
  );

  expect(textarea.hasClass('sg-textarea--simple')).toEqual(true);
});


test('default validation', () => {
  const textarea = shallow(
    <Textarea />
  );

  expect(textarea.hasClass('sg-textarea--valid')).toEqual(false);
  expect(textarea.hasClass('sg-textarea--invalid')).toEqual(false);
});


test('valid', () => {
  const textarea = shallow(
    <Textarea valid />
  );

  expect(textarea.hasClass('sg-textarea--valid')).toEqual(true);
  expect(textarea.hasClass('sg-textarea--invalid')).toEqual(false);
});


test('invalid', () => {
  const textarea = shallow(
    <Textarea invalid />
  );

  expect(textarea.hasClass('sg-textarea--valid')).toEqual(false);
  expect(textarea.hasClass('sg-textarea--invalid')).toEqual(true);
});


test('error when both valid and invalid', () => {
  expect(() => {
    shallow(<Textarea valid invalid />);
  }).toThrow();
});


test('size', () => {
  const textarea = shallow(
    <Textarea size={SIZE.SHORT} />
  );

  expect(textarea.hasClass('sg-textarea--short')).toEqual(true);
});


test('default size', () => {
  const textarea = shallow(
    <Textarea />
  );

  expect(textarea.hasClass('sg-textarea--normal')).toEqual(false);
  expect(textarea.hasClass('sg-textarea--short')).toEqual(false);
});
