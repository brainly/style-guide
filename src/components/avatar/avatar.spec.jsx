import React from 'react';
import Avatar, {SIZE} from './Avatar';
import Icon, {TYPE} from '../icons/Icon';

import {shallow, mount} from 'enzyme';

test('render default', () => {
  const avatar = mount(<Avatar />);

  expect(avatar.find('.sg-avatar__image')).toHaveLength(1);
  expect(avatar.find('img')).toHaveLength(0);

  expect(avatar.find('.sg-avatar__image--icon')).toHaveLength(1);
  expect(avatar.find(Icon)).toHaveLength(1);
});

test('render with image', () => {
  const imgSrc = 'https://source.unsplash.com/100x100/?man';

  const avatar = mount(
    <Avatar imgSrc={imgSrc}/>
  );

  expect(avatar.find('.sg-avatar__image')).toHaveLength(1);
  expect(avatar.find('img')).toHaveLength(1);

  expect(avatar.find('.sg-avatar__image--icon')).toHaveLength(0);
  expect(avatar.find(Icon)).toHaveLength(0);
});

test('no error when render without image', () => {
  const spy = jest.spyOn(console, 'error');

  console.error = jest.fn();
  mount(<Avatar/>);
  expect(console.error.mock.calls).toHaveLength(0);

  spy.mockRestore();
});

test('default icon profile', () => {
  const iconType = TYPE.PROFILE;
  const avatar = mount(<Avatar/>);
  const icoProps = avatar.find(Icon).props();

  expect(icoProps.type).toEqual(iconType);
});

test('SIZE', () => {
  const size = SIZE.XLARGE;
  const avatar = shallow(
    <Avatar size={size}/>
  );

  expect(avatar.hasClass('sg-avatar--xlarge')).toEqual(true);
});

test('border', () => {
  const avatar = shallow(
    <Avatar border={true}/>
  );

  expect(avatar.hasClass('sg-avatar--with-border')).toEqual(true);
});

test('spaced', () => {
  const avatar = shallow(
    <Avatar spaced={true}/>
  );

  expect(avatar.hasClass('sg-avatar--spaced')).toEqual(true);
});
