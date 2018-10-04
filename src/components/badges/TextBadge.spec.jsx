import React from 'react';
import TextBadge, {TEXT_BADGE_COLOR, TEXT_BADGE_SIZE} from './TextBadge';
import Badge from './subcomponents/Badge';
import Text, {TEXT_SIZE, TEXT_COLOR} from 'text/Text';

import {shallow, mount} from 'enzyme';

describe('<TextBadge />', () => {
  it('render itself without error', () => {
    const component = shallow(
      <TextBadge>Test</TextBadge>
    );

    const badge = component.find(Badge);

    expect(badge).toHaveLength(1);
  });

  it('sets <Text /> component size - default', () => {
    const badge = mount(
      <TextBadge>Test</TextBadge>
    );
    const text = badge.find(Text);

    expect(text.props().size).toEqual(TEXT_SIZE.XSMALL);
  });

  it('sets <Text /> component size - small', () => {
    const badge = shallow(
      <TextBadge size={TEXT_BADGE_SIZE.SMALL}>Test</TextBadge>
    );

    expect(badge.find(Badge).children().props().size).toEqual(TEXT_SIZE.XSMALL);
  });

  it('sets <Text /> component size - large', () => {
    const badge = shallow(
      <TextBadge size={TEXT_BADGE_SIZE.LARGE}>Test</TextBadge>
    );

    expect(badge.find(Badge).children().props().size).toEqual(TEXT_SIZE.NORMAL);
  });

  it('maps <Text /> and <Badge /> colors', () => {
    const component = shallow(
      <TextBadge color={TEXT_BADGE_COLOR.MINT_SECONDARY}>Test</TextBadge>
    );
    const badge = component.find(Badge);

    expect(badge.children().props().color).toEqual(TEXT_COLOR.WHITE);
  });

  it('animates when withAnimation is passed <Badge />', () => {
    const component = shallow(
      <TextBadge withAnimation>Test</TextBadge>
    );
    const badge = component.find(Badge);

    expect(badge.props().withAnimation).toEqual(true);
  });

  it('is is styled differently when rounded is passed <Badge />', () => {
    const component = shallow(
      <TextBadge rounded>Test</TextBadge>
    );
    const badge = component.find(Badge);

    expect(badge.props().rounded).toEqual(true);
  });

  it('logs error when has no child', () => {
    const spy = jest.spyOn(console, 'error');

    console.error = jest.fn();
    shallow(<TextBadge />);
    expect(console.error.mock.calls).toHaveLength(1);

    spy.mockRestore();
  });

  it('logs error when passing a react element as a child', () => {
    const spy = jest.spyOn(console, 'error');

    console.error = jest.fn();
    shallow(
      <TextBadge>
        <div>asd</div>
      </TextBadge>);
    expect(console.error.mock.calls).toHaveLength(1);

    spy.mockRestore();
  });
});
