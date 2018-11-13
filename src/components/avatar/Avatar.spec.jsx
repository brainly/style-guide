import React from 'react';
import Avatar, {SIZE} from './Avatar';
import Icon, {TYPE} from 'icons/Icon';

import {shallow, mount} from 'enzyme';

describe('<Avatar />', () => {
  it('renders', () => {
    const avatar = mount(<Avatar />);

    expect(avatar.find('.sg-avatar__image')).toHaveLength(1);
    expect(avatar.find('img')).toHaveLength(0);

    expect(avatar.find('.sg-avatar__image--icon')).toHaveLength(1);
    expect(avatar.find(Icon)).toHaveLength(1);
  });

  it('renders with image', () => {
    const imgSrc = 'https://source.unsplash.com/100x100/?man';

    const avatar = mount(
      <Avatar imgSrc={imgSrc} />
    );

    expect(avatar.find('.sg-avatar__image')).toHaveLength(1);
    expect(avatar.find('img')).toHaveLength(1);

    expect(avatar.find('.sg-avatar__image--icon')).toHaveLength(0);
    expect(avatar.find(Icon)).toHaveLength(0);
  });

  it('renders without image', () => {
    const spy = jest.spyOn(console, 'error');

    console.error = jest.fn();
    mount(<Avatar />);
    expect(console.error.mock.calls).toHaveLength(0);

    spy.mockRestore();
  });

  it('has default icon profile', () => {
    const iconType = TYPE.PROFILE;
    const avatar = mount(<Avatar />);
    const icoProps = avatar.find(Icon).props();

    expect(icoProps.type).toEqual(iconType);
  });

  it('sets proper SIZE', () => {
    const size = SIZE.XLARGE;
    const avatar = shallow(
      <Avatar size={size} />
    );

    expect(avatar.hasClass('sg-avatar--xlarge')).toEqual(true);
  });

  it('sets proper border', () => {
    const avatar = shallow(
      <Avatar border />
    );

    expect(avatar.hasClass('sg-avatar--with-border')).toEqual(true);
  });

  it('renders spaced', () => {
    const avatar = shallow(
      <Avatar spaced />
    );

    expect(avatar.hasClass('sg-avatar--spaced')).toEqual(true);
  });

  it('renders link', () => {
    const avatar = shallow(
      <Avatar link="https://brainly.com" />
    );

    expect(avatar.find('a')).toHaveLength(1);

    const avatar1 = shallow(
      <Avatar />
    );

    expect(avatar1.find('a')).toHaveLength(0);
  });

  it('renders clickable option', () => {
    const avatar = shallow(
      <Avatar clickable />
    );

    expect(avatar.hasClass('sg-avatar--clickable')).toEqual(true);
  });
});
