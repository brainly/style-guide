import React from 'react';
import SubjectIcon, {TYPE, SIZE} from './SubjectIcon';
import {shallow} from 'enzyme';

test('render', () => {
  const icon = shallow(
    <SubjectIcon type={TYPE.ACCOUNTANCY} />
  );

  expect(icon.hasClass('sg-subject-icon')).toEqual(true);
  expect(icon.find('use')).toHaveLength(1);
});

test('error when no type', () => {
  const spy = jest.spyOn(console, 'error');

  console.error = jest.fn();
  shallow(<SubjectIcon />);
  expect(console.error.mock.calls).toHaveLength(1);

  spy.mockRestore();
});

test('type passed to xlink:href', () => {
  const type = TYPE.ACCOUNTANCY;
  const icon = shallow(
    <SubjectIcon type={type} />
  );
  const use = icon.find('use');

  expect(use.props().xlinkHref).toEqual('#icon-subject-' + type);
});

test('size', () => {
  const size = SIZE.SMALL;
  const type = TYPE.LANGUAGE;
  const icon = shallow(
    <SubjectIcon type={type} size={size} />
  );

  expect(icon.hasClass(`sg-subject-icon--${size}`)).toEqual(true);
});

test('mono', () => {
  const type = TYPE.LANGUAGE;
  const icon = shallow(
    <SubjectIcon type={type} mono />
  );
  const use = icon.find('use');

  expect(use.props().xlinkHref).toEqual('#icon-subject-mono-' + type);
});

test('normal size', () => {
  const type = TYPE.LANGUAGE;

  const icon = shallow(
    <SubjectIcon type={type} />
  );

  expect(icon.hasClass('sg-subject-icon--normal')).toEqual(false);
});

