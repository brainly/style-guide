import React from 'react';
import SubjectIconBox, { TYPE } from './SubjectIconBox';
import SubjectIcon from './SubjectIcon';
import { shallow } from 'enzyme';
test('render', function () {
  var box = shallow(React.createElement(SubjectIconBox, {
    type: TYPE.LIFE_SCIENCE
  }));
  expect(box.hasClass('sg-subject-icon-box')).toEqual(true);
  expect(box.find(SubjectIcon)).toHaveLength(1);
});
test('darker', function () {
  var box = shallow(React.createElement(SubjectIconBox, {
    type: TYPE.LIFE_SCIENCE,
    darker: true
  }));
  expect(box.hasClass('sg-subject-icon-box--darker')).toEqual(true);
});