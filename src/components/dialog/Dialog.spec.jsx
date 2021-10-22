import * as React from 'react';
import {mount} from 'enzyme';
import {act} from 'react-dom/test-utils';
import Dialog from './Dialog';

window.scrollTo = jest.fn();

describe('<Dialog>', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('renders children', () => {
    const wrapper = mount(<Dialog active>content text</Dialog>);

    expect(wrapper.containsMatchingElement('content text')).toBe(true);
  });

  it('renders proper size', () => {
    const wrapper = mount(
      <Dialog size="xl" active>
        content text
      </Dialog>
    );

    expect(wrapper.find('.sg-dialog__container--size-xl')).toHaveLength(1);
  });

  it('renders outside scroll', () => {
    const wrapper = mount(
      <Dialog scroll="outside" active>
        content text
      </Dialog>
    );

    expect(wrapper.find('.sg-dialog__overlay--scroll')).toHaveLength(1);
  });

  it('renders inside scroll', () => {
    const wrapper = mount(
      <Dialog scroll="inside" active>
        content text
      </Dialog>
    );

    expect(wrapper.find('.sg-dialog__container--scroll')).toHaveLength(1);
  });

  it('fires onDismiss callback on Escape key', () => {
    const onDismiss = jest.fn();

    mount(
      <Dialog onDismiss={onDismiss} active>
        content text
      </Dialog>
    );

    global.dispatchEvent(new KeyboardEvent('keyup', {key: 'Escape'}));
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it('fires onDismiss callback on overlay click', () => {
    const onDismiss = jest.fn();
    const wrapper = mount(
      <Dialog onDismiss={onDismiss} active>
        content text
      </Dialog>
    );

    wrapper.find('.sg-dialog__overlay').simulate('click');
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it('returns null after exit transition', () => {
    const wrapper = mount(<Dialog active>content text</Dialog>);

    expect(wrapper.isEmptyRender()).toBe(false);

    wrapper.setProps({active: false});
    act(() => jest.runAllTimers());

    wrapper.update();
    expect(wrapper.isEmptyRender()).toBe(true);
  });
});
