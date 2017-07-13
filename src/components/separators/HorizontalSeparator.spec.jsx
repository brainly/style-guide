import React from 'react';
import HorizontalSeparator from './HorizontalSeparator';
import {shallow} from 'enzyme';

test('render', () => {
  const separator = shallow(
    <HorizontalSeparator/>
  );

  expect(separator.hasClass('sg-horizontal-separator')).toEqual(true);
});

test('spaced', () => {
  const separator = shallow(
    <HorizontalSeparator spaced={true}/>
  );

  expect(separator.hasClass('sg-horizontal-separator--spaced')).toEqual(true);
  expect(separator.hasClass('sg-horizontal-separator--short-spaced')).toEqual(false);
});

test('spaced and short', () => {
  const separator = shallow(
    <HorizontalSeparator spaced={true} short={true}/>
  );

  expect(separator.hasClass('sg-horizontal-separator--spaced')).toEqual(false);
  expect(separator.hasClass('sg-horizontal-separator--short-spaced')).toEqual(true);
});

test('only short, not spaced', () => {
  const separator = shallow(
    <HorizontalSeparator short={true}/>
  );

  expect(separator.hasClass('sg-horizontal-separator--spaced')).toEqual(false);
  expect(separator.hasClass('sg-horizontal-separator--short-spaced')).toEqual(false);
});
