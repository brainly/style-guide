import React from 'react';
import Avatar, { SIZE } from './Avatar';
import Icon from 'icons/Icon';
import { shallow, mount } from 'enzyme';
test('render default', function () {
  var avatar = mount(React.createElement(Avatar, null));
  expect(avatar.find('.sg-avatar__image')).toHaveLength(1);
  expect(avatar.find('img')).toHaveLength(0);
  expect(avatar.find('.sg-avatar__image--icon')).toHaveLength(1);
  expect(avatar.find(Icon)).toHaveLength(1);
});
test('render with image', function () {
  var imgSrc = 'https://source.unsplash.com/100x100/?man';
  var avatar = mount(React.createElement(Avatar, {
    imgSrc: imgSrc
  }));
  expect(avatar.find('.sg-avatar__image')).toHaveLength(1);
  expect(avatar.find('img')).toHaveLength(1);
  expect(avatar.find('.sg-avatar__image--icon')).toHaveLength(0);
  expect(avatar.find(Icon)).toHaveLength(0);
});
test('no error when render without image', function () {
  var spy = jest.spyOn(console, 'error');
  console.error = jest.fn();
  mount(React.createElement(Avatar, null));
  expect(console.error.mock.calls).toHaveLength(0);
  spy.mockRestore();
});
test('default icon profile', function () {
  var avatar = mount(React.createElement(Avatar, null));
  var icoProps = avatar.find(Icon).props();
  expect(icoProps.type).toEqual('profile');
});
test('SIZE', function () {
  var size = SIZE.XLARGE;
  var avatar = shallow(React.createElement(Avatar, {
    size: size
  }));
  expect(avatar.hasClass('sg-avatar--xlarge')).toEqual(true);
});
test('border', function () {
  var avatar = shallow(React.createElement(Avatar, {
    border: true
  }));
  expect(avatar.hasClass('sg-avatar--with-border')).toEqual(true);
});
test('spaced', function () {
  var avatar = shallow(React.createElement(Avatar, {
    spaced: true
  }));
  expect(avatar.hasClass('sg-avatar--spaced')).toEqual(true);
});
test('link', function () {
  var avatar = shallow(React.createElement(Avatar, {
    link: "https://brainly.com"
  }));
  expect(avatar.find('a')).toHaveLength(1);
  var avatar1 = shallow(React.createElement(Avatar, null));
  expect(avatar1.find('a')).toHaveLength(0);
});