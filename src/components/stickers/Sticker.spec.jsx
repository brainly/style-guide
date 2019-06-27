import React from 'react';
import Sticker, {TYPE} from './Sticker';
import {shallow} from 'enzyme';

test('render', () => {
  const sticker = shallow(
    <Sticker type={TYPE.CAMERA} />
  );

  expect(sticker.hasClass('sg-sticker')).toEqual(true);
  expect(sticker.find('use')).toHaveLength(2);
});

test('type passed to xlink:href', () => {
  const type = TYPE.CAMERA;
  const sticker = shallow(
    <Sticker type={type} />
  );
  const use = sticker.find('use');
  const back = use.at(0);
  const front = use.at(1);

  expect(back.props().xlinkHref).toEqual(`#icon-${type}`);
  expect(front.props().xlinkHref).toEqual(`#icon-${type}`);
});
