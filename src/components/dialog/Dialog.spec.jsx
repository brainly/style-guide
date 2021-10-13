import * as React from 'react';
import {shallow, mount} from 'enzyme';
import Dialog from './Dialog';

describe('<Dialog>', () => {
  it('renders', () => {
    const wrapper = shallow(<Dialog>content text</Dialog>);

    expect(wrapper.containsMatchingElement('content text')).toBe(true);
  });

  it('renders proper size', () => {
    const wrapper = shallow(<Dialog size="xl">content text</Dialog>);

    expect(wrapper.find('.sg-dialog__container--size-xl')).toHaveLength(1);
  });

  it('renders outside scroll', () => {
    const wrapper = shallow(<Dialog scroll="outside">content text</Dialog>);

    expect(wrapper.find('.sg-dialog__overlay--scroll')).toHaveLength(1);
  });

  it('renders inside scroll', () => {
    const wrapper = shallow(<Dialog scroll="inside">content text</Dialog>);

    expect(wrapper.find('.sg-dialog__container--scroll')).toHaveLength(1);
  });

  it('fires onDismiss callback on Escape key', () => {
    const onDismiss = jest.fn();

    mount(<Dialog onDismiss={onDismiss}>content text</Dialog>);

    global.dispatchEvent(new KeyboardEvent('keyup', {key: 'Escape'}));
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it('fires onDismiss callback on overlay click', () => {
    const onDismiss = jest.fn();
    const wrapper = mount(<Dialog onDismiss={onDismiss}>content text</Dialog>);

    wrapper.find('.sg-dialog__overlay').simulate('click');
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });
});
