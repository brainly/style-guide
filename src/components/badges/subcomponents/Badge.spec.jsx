import React from 'react';
import Badge, {BADGE_COLOR, BADGE_SIZE} from './Badge';
import {shallow, mount} from 'enzyme';

describe('<Badge />', () => {
  it('renders without error', () => {
    const badge = shallow(
      <Badge>Test</Badge>
    );

    expect(badge).toHaveLength(1);
    expect(badge.hasClass('sg-badge')).toEqual(true);
  });

  it('doesn\'t add additional classes when has default size', () => {
    const badge = mount(
      <Badge>Test</Badge>
    );

    expect(badge.hasClass('sg-badge--small')).toEqual(false);
    expect(badge.hasClass('sg-badge--large')).toEqual(false);
  });

  it('adds class modifier when has small size', () => {
    const badge = shallow(
      <Badge size={BADGE_SIZE.SMALL}>Test</Badge>
    );

    expect(badge.hasClass('sg-badge--small')).toEqual(true);
  });

  it('adds class modifier when has larger size', () => {
    const badge = shallow(
      <Badge size={BADGE_SIZE.LARGE}>Test</Badge>
    );

    expect(badge.hasClass('sg-badge--large')).toEqual(true);
  });

  it('can be configured by color', () => {
    const badge = shallow(
      <Badge color={BADGE_COLOR.MINT_SECONDARY}>Test</Badge>
    );

    expect(badge.hasClass('sg-badge--mint-secondary')).toEqual(true);
  });

  it('adds animation class modifier when withAnimation is present', () => {
    const badge = shallow(
      <Badge withAnimation>Test</Badge>
    );

    expect(badge.hasClass('sg-badge--with-animation')).toEqual(true);
  });

  it('adds rounded modifier class when rounded is present', () => {
    const badge = shallow(
      <Badge rounded>Test</Badge>
    );

    expect(badge.hasClass('sg-badge--rounded')).toEqual(true);
  });

  it('logs error when no child has been passed', () => {
    const spy = jest.spyOn(console, 'error');

    console.error = jest.fn();
    shallow(<Badge />);
    expect(console.error.mock.calls).toHaveLength(1);

    spy.mockRestore();
  });
});
