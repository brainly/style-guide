import React from 'react';
import SubjectIcon, {TYPE, SIZE, ICON_COLOR} from './SubjectIcon';
import {shallow} from 'enzyme';

test('render', () => {
  const icon = shallow(
    <SubjectIcon type={TYPE.ACCOUNTANCY} />
  );

  expect(icon.hasClass('sg-subject-icon')).toEqual(true);
  expect(icon.find('use')).toHaveLength(1);
});

test('type passed to xlink:href', () => {
  const type = TYPE.ACCOUNTANCY;
  const icon = shallow(
    <SubjectIcon type={type} />
  );
  const use = icon.find('use');

  expect(use.props().xlinkHref).toEqual(`#icon-subject-${type}`);
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
    <SubjectIcon type={type} monoColor={ICON_COLOR.LIGHT} />
  );
  const use = icon.find('use');

  expect(use.props().xlinkHref).toEqual(`#icon-subject-mono-${type}`);
});

test('normal size', () => {
  const type = TYPE.LANGUAGE;

  const icon = shallow(
    <SubjectIcon type={type} />
  );

  expect(icon.hasClass('sg-subject-icon--normal')).toEqual(false);
});

