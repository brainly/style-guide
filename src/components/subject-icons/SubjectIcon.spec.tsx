import * as React from 'react';
import SubjectIcon, {TYPE, SIZE, ICON_COLOR} from './SubjectIcon';
import {render} from '@testing-library/react';

test('render', () => {
  const icon = render(<SubjectIcon type={TYPE.ACCOUNTANCY} />);

  expect(icon.hasClass('sg-subject-icon')).toEqual(true);
  expect(icon.find('use')).toHaveLength(1);
});
test('type passed to xlink:href', () => {
  const type = TYPE.ACCOUNTANCY;
  const icon = render(<SubjectIcon type={type} />);
  const use = icon.find('use');

  expect(use.props().xlinkHref).toEqual(`#icon-subject-${type}`);
});
test('size', () => {
  const size = SIZE.SMALL;
  const type = TYPE.OTHERLANGUAGES;
  const icon = render(<SubjectIcon type={type} size={size} />);

  expect(icon.hasClass(`sg-subject-icon--${size}`)).toEqual(true);
});
test('mono', () => {
  const type = TYPE.OTHERLANGUAGES;
  const icon = render(
    <SubjectIcon type={type} monoColor={ICON_COLOR['icon-white']} />
  );
  const use = icon.find('use');

  expect(use.props().xlinkHref).toEqual(`#icon-subject-mono-${type}`);
});
test('normal size', () => {
  const type = TYPE.OTHERLANGUAGES;
  const icon = render(<SubjectIcon type={type} />);

  expect(icon.hasClass('sg-subject-icon--normal')).toEqual(false);
});
