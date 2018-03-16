import React from 'react';
import TextBadge, {TEXT_BADGE_COLOR, TEXT_BADGE_SIZE} from './TextBadge';
import Badge from './Badge';
import Text, {SIZE as TEXT_SIZE, COLOR as TEXT_COLOR} from '../text/Text';
import {shallow, mount} from 'enzyme';

describe('<TextBadge />', () => {
  it('render', () => {
    const component = shallow(
      <TextBadge>Test</TextBadge>
    );

    const badge = component.find(Badge);

    expect(badge).toHaveLength(1);
  });

  it('default size', () => {
    const badge = mount(
      <TextBadge>Test</TextBadge>
    );
    const text = badge.find(Text);

    expect(text.props().size).toEqual(TEXT_SIZE.XSMALL);
    expect(badge.hasClass('sg-badge--small')).toEqual(false);
    expect(badge.hasClass('sg-badge--large')).toEqual(false);
  });

  it('small size', () => {
    const badge = shallow(
      <TextBadge size={TEXT_BADGE_SIZE.SMALL}>Test</TextBadge>
    );

    expect(badge.find(Badge).children().props().size).toEqual(TEXT_SIZE.XSMALL);
  });

  it('larger size', () => {
    const badge = shallow(
      <TextBadge size={TEXT_BADGE_SIZE.LARGE}>Test</TextBadge>
    );

    expect(badge.find(Badge).children().props().size).toEqual(TEXT_SIZE.NORMAL);
  });

  it('color', () => {
    const component = shallow(
      <TextBadge color={TEXT_BADGE_COLOR.MINT_SECONDARY}>Test</TextBadge>
    );
    const badge = component.find(Badge);

    expect(badge.children().props().color).toEqual(TEXT_COLOR.LIGHT);
  });

  it('animation', () => {
    const component = shallow(
      <TextBadge withAnimation>Test</TextBadge>
    );
    const badge = component.find(Badge);

    expect(badge.props().withAnimation).toEqual(true);
  });

  it('rounded', () => {
    const component = shallow(
      <TextBadge rounded>Test</TextBadge>
    );
    const badge = component.find(Badge);

    expect(badge.props().rounded).toEqual(true);
  });

  it('error when no child', () => {
    const spy = jest.spyOn(console, 'error');

    console.error = jest.fn();
    shallow(<TextBadge />);
    expect(console.error.mock.calls).toHaveLength(1);

    spy.mockRestore();
  });

  it('error when passing a react element as a child', () => {
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
