import * as React from 'react';
import {mount} from 'enzyme';
import Dialog from './Dialog';

window.scrollTo = jest.fn();

describe('<Dialog>', () => {
  it('renders children', () => {
    const wrapper = mount(<Dialog open>content text</Dialog>);

    expect(wrapper.containsMatchingElement('content text')).toBe(true);
  });

  it('renders proper size', () => {
    const wrapper = mount(
      <Dialog size="xl" open>
        content text
      </Dialog>
    );

    expect(wrapper.find('.sg-dialog__container--size-xl')).toHaveLength(1);
  });

  it('renders outside scroll', () => {
    const wrapper = mount(
      <Dialog scroll="outside" open>
        content text
      </Dialog>
    );

    expect(wrapper.find('.sg-dialog__overlay--scroll')).toHaveLength(1);
  });

  it('renders inside scroll', () => {
    const wrapper = mount(
      <Dialog scroll="inside" open>
        content text
      </Dialog>
    );

    expect(wrapper.find('.sg-dialog__container--scroll')).toHaveLength(1);
  });

  it('fires onDismiss callback on Escape key', () => {
    const onDismiss = jest.fn();
    const wrapper = mount(
      <Dialog onDismiss={onDismiss} open>
        content text
      </Dialog>
    );

    wrapper.simulate('keyUp', {key: 'Escape'});
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it('fires onDismiss callback on Overlay click', () => {
    const onDismiss = jest.fn();
    const wrapper = mount(
      <Dialog onDismiss={onDismiss} open>
        content text
      </Dialog>
    );

    wrapper.find('.sg-dialog__overlay').simulate('click');
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it('fires onEntryTransitionEnd callback on entry', () => {
    const onEntryTransitionEnd = jest.fn();

    mount(
      <Dialog onEntryTransitionEnd={onEntryTransitionEnd} open>
        content text
      </Dialog>
    );

    expect(onEntryTransitionEnd).toHaveBeenCalledTimes(1);
  });

  it('fires onExitTransitionEnd callback on exit', () => {
    const onExitTransitionEnd = jest.fn();
    const wrapper = mount(
      <Dialog onExitTransitionEnd={onExitTransitionEnd} open>
        content text
      </Dialog>
    );

    wrapper.setProps({open: false});
    expect(onExitTransitionEnd).toHaveBeenCalledTimes(1);
  });

  it('does not fire onEntryTransitionEnd callback before mount', () => {
    const onEntryTransitionEnd = jest.fn();

    mount(
      <Dialog onEntryTransitionEnd={onEntryTransitionEnd} open={false}>
        content text
      </Dialog>
    );

    expect(onEntryTransitionEnd).toHaveBeenCalledTimes(0);
  });

  it('does not fire onExitTransitionEnd callback before mount', () => {
    const onExitTransitionEnd = jest.fn();

    mount(
      <Dialog onExitTransitionEnd={onExitTransitionEnd} open={false}>
        content text
      </Dialog>
    );

    expect(onExitTransitionEnd).toHaveBeenCalledTimes(0);
  });

  it('returns null after exit transition', () => {
    const wrapper = mount(<Dialog open>content text</Dialog>);

    expect(wrapper.isEmptyRender()).toBe(false);

    wrapper.setProps({open: false});
    wrapper.update();

    expect(wrapper.isEmptyRender()).toBe(true);
  });

  it('sets given zIndex', () => {
    const wrapper = mount(
      <Dialog open zIndex={10}>
        content text
      </Dialog>
    );

    const dialogOverlay = wrapper.find('.sg-dialog__overlay');

    expect(dialogOverlay.props().style.zIndex).toEqual(10);
  });
});
