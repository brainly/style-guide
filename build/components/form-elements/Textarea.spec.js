import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import Textarea, { SIZE } from './Textarea';
import { shallow, mount } from 'enzyme';
test('render', function () {
  var textarea = shallow(React.createElement(Textarea, null));
  expect(textarea.hasClass('sg-textarea')).toEqual(true);
});
test('full width', function () {
  var textarea = shallow(React.createElement(Textarea, {
    fullWidth: true
  }));
  expect(textarea.hasClass('sg-textarea--full-width')).toEqual(true);
});
test('auto height', function () {
  var textarea = shallow(React.createElement(Textarea, {
    autoHeight: true
  }));
  expect(textarea.hasClass('sg-textarea--auto-height')).toEqual(true);
});
test('simple', function () {
  var textarea = shallow(React.createElement(Textarea, {
    simple: true
  }));
  expect(textarea.hasClass('sg-textarea--simple')).toEqual(true);
});
test('default validation', function () {
  var textarea = shallow(React.createElement(Textarea, null));
  expect(textarea.hasClass('sg-textarea--valid')).toEqual(false);
  expect(textarea.hasClass('sg-textarea--invalid')).toEqual(false);
});
test('valid', function () {
  var textarea = shallow(React.createElement(Textarea, {
    valid: true
  }));
  expect(textarea.hasClass('sg-textarea--valid')).toEqual(true);
  expect(textarea.hasClass('sg-textarea--invalid')).toEqual(false);
});
test('invalid', function () {
  var textarea = shallow(React.createElement(Textarea, {
    invalid: true
  }));
  expect(textarea.hasClass('sg-textarea--valid')).toEqual(false);
  expect(textarea.hasClass('sg-textarea--invalid')).toEqual(true);
});
test('error when both valid and invalid', function () {
  expect(function () {
    shallow(React.createElement(Textarea, {
      valid: true,
      invalid: true
    }));
  }).toThrow();
});
test('size', function () {
  var textarea = shallow(React.createElement(Textarea, {
    size: SIZE.SHORT
  }));
  expect(textarea.hasClass('sg-textarea--short')).toEqual(true);
});
test('default size', function () {
  var textarea = shallow(React.createElement(Textarea, null));
  expect(textarea.hasClass('sg-textarea--normal')).toEqual(false);
  expect(textarea.hasClass('sg-textarea--short')).toEqual(false);
});
test('Type', function () {
  var CustomTextarea = function CustomTextarea(props) {
    return React.createElement("textarea", _extends({}, props, {
      "data-super-custom": "superCustom"
    }));
  };

  var textarea = mount( // eslint-disable-next-line react/jsx-no-bind
  React.createElement(Textarea, {
    type: CustomTextarea
  }));
  expect(textarea.find('[data-super-custom="superCustom"]')).toHaveLength(1);
});