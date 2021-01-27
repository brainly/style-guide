import * as React from 'react';
import RwdHelper, {TYPE} from './RwdHelper';
import {shallow} from 'enzyme';
import Icon, {TYPE as icoTypes} from 'icons/Icon';

test('render element', () => {
  const rwdHelper = shallow(
    <RwdHelper hide={TYPE.SMALL_ONLY}>
      <div>inside div</div>
    </RwdHelper>
  );

  expect(rwdHelper.hasClass('sg-hide-for-small-only')).toEqual(true);
  expect(rwdHelper.is('div')).toEqual(true);
});

test('render element', () => {
  const rwdHelper = shallow(
    <RwdHelper hide={TYPE.SMALL_ONLY}>
      <Icon type={icoTypes.HEART} />
    </RwdHelper>
  );

  expect(rwdHelper.hasClass('sg-hide-for-small-only')).toEqual(true);
  expect(rwdHelper.is(Icon)).toEqual(true);
});

test('render text', () => {
  const rwdHelper = shallow(
    <RwdHelper hide={TYPE.SMALL_ONLY}>Some text</RwdHelper>
  );

  expect(rwdHelper.hasClass('sg-hide-for-small-only')).toEqual(true);
  expect(rwdHelper.is('span')).toEqual(true);
});

test('merge className', () => {
  const rwdHelper = shallow(
    <RwdHelper hide={TYPE.SMALL_ONLY}>
      <div className="test">inside div</div>
    </RwdHelper>
  );

  expect(rwdHelper.find('.test.sg-hide-for-small-only')).toHaveLength(1);
});
