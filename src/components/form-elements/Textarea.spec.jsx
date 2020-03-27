import React from 'react';
import Textarea, {SIZE} from './Textarea';
import {shallow, mount} from 'enzyme';

test('render', () => {
  const component = shallow(<Textarea />);
  const textarea = component.find('textarea');

  expect(textarea.hasClass('sg-textarea')).toEqual(true);
});

test('full width', () => {
  const component = shallow(<Textarea fullWidth />);
  const textarea = component.find('textarea');

  expect(textarea.hasClass('sg-textarea--full-width')).toEqual(true);
});

test('auto height', () => {
  const component = shallow(<Textarea autoHeight />);
  const textarea = component.find('textarea');

  expect(textarea.hasClass('sg-textarea--auto-height')).toEqual(true);
});

test('simple', () => {
  const component = shallow(<Textarea simple />);
  const textarea = component.find('textarea');

  expect(textarea.hasClass('sg-textarea--simple')).toEqual(true);
});

test('default validation', () => {
  const component = shallow(<Textarea />);
  const textarea = component.find('textarea');

  expect(textarea.hasClass('sg-textarea--valid')).toEqual(false);
  expect(textarea.hasClass('sg-textarea--invalid')).toEqual(false);
});

test('valid', () => {
  const component = shallow(<Textarea valid />);
  const textarea = component.find('textarea');

  expect(textarea.hasClass('sg-textarea--valid')).toEqual(true);
  expect(textarea.hasClass('sg-textarea--invalid')).toEqual(false);
});

test('invalid', () => {
  const component = shallow(<Textarea invalid />);
  const textarea = component.find('textarea');

  expect(textarea.hasClass('sg-textarea--valid')).toEqual(false);
  expect(textarea.hasClass('sg-textarea--invalid')).toEqual(true);
});

test('error when both valid and invalid', () => {
  expect(() => {
    shallow(<Textarea valid invalid />);
  }).toThrow();
});

test('size', () => {
  const component = shallow(<Textarea size={SIZE.SHORT} />);
  const textarea = component.find('textarea');

  expect(textarea.hasClass('sg-textarea--short')).toEqual(true);
});

test('default size', () => {
  const component = shallow(<Textarea />);
  const textarea = component.find('textarea');

  expect(textarea.hasClass('sg-textarea--normal')).toEqual(false);
  expect(textarea.hasClass('sg-textarea--short')).toEqual(false);
});

test('Type', () => {
  const CustomTextarea = props => (
    <textarea {...props} data-super-custom="superCustom" />
  );
  const textarea = mount(
    // eslint-disable-next-line react/jsx-no-bind
    <Textarea type={CustomTextarea} />
  );

  expect(textarea.find('[data-super-custom="superCustom"]')).toHaveLength(1);
});
