import React from 'react';
import RwdHelper, {TYPE} from './RwdHelper';
import {shallow} from 'enzyme';
import Icon, {TYPE as icoTypes} from '../icons/Icon';

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
      <Icon type={icoTypes.heart}/>
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

test('error when no hide', () => {
  const spy = jest.spyOn(console, 'error');

  console.error = jest.fn();
  shallow(<RwdHelper>Some text</RwdHelper>);
  expect(console.error.mock.calls).toHaveLength(1);

  spy.mockRestore();
});

test('error when no child', () => {
  const spy = jest.spyOn(console, 'error');

  console.error = jest.fn();
  shallow(<RwdHelper hide={TYPE.SMALL_ONLY}></RwdHelper>);
  expect(console.error.mock.calls).toHaveLength(1);

  spy.mockRestore();
});

test('merge className', () => {
  const rwdHelper = shallow(
    <RwdHelper hide={TYPE.SMALL_ONLY}>
      <div className="test">inside div</div>
    </RwdHelper>
  );

  expect(rwdHelper.find('.test.sg-hide-for-small-only')).toHaveLength(1);
});
