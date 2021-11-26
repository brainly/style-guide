import * as React from 'react';
import {mount} from 'enzyme';
import Dialog from './Dialog';
import DialogHeader from './DialogHeader';
import DialogBody from './DialogBody';
import DialogCloseButton from './DialogCloseButton';
import {testA11y} from '../../axe';

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

    mount(
      <Dialog onDismiss={onDismiss} open>
        content text
      </Dialog>
    );

    document.dispatchEvent(new KeyboardEvent('keyup', {key: 'Escape'}));
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
    const wrapper = mount(
      <Dialog onEntryTransitionEnd={onEntryTransitionEnd} open>
        content text
      </Dialog>
    );

    wrapper.find('[role="dialog"]').simulate('transitionEnd', {
      propertyName: 'transform',
    });

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
    wrapper.find('[role="dialog"]').simulate('transitionEnd', {
      propertyName: 'opacity',
    });

    expect(onExitTransitionEnd).toHaveBeenCalledTimes(1);
  });

  it('returns null after exit transition', () => {
    const wrapper = mount(<Dialog open>content text</Dialog>);

    expect(wrapper.isEmptyRender()).toBe(false);

    wrapper.setProps({open: false});
    wrapper.find('[role="dialog"]').simulate('transitionEnd', {
      propertyName: 'opacity',
    });

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

  describe('A11y', () => {
    it('has label, "dialog" role and aria-modal', async () => {
      const wrapper = mount(
        <Dialog open label="Dialog label">
          content text
        </Dialog>
      );

      await testA11y(wrapper);

      expect(wrapper.find('[role="dialog"][aria-modal]')).toBeTruthy();
    });

    it('is described by <DialogBody/> ', async () => {
      const descId = 'desc-id';

      await testA11y(
        <Dialog open describedBy={descId} label="Dialog label">
          <DialogBody id={descId}>
            Information you provide to us directly.
          </DialogBody>
        </Dialog>
      );
    });

    it('moves focus to first tabbable element when opens', async () => {
      const wrapper = mount(
        <Dialog open label="Dialog label">
          <button id="button">button</button>
        </Dialog>
      );

      expect(wrapper.find('#button').getDOMNode()).toEqual(
        document.activeElement
      );
    });

    it('has focus when it opens and there are no children', async () => {
      const wrapper = mount(
        <Dialog open label="Dialog label">
          content text
        </Dialog>
      );

      expect(wrapper.find('[role="dialog"]').getDOMNode()).toEqual(
        document.activeElement
      );
    });

    it('has <DialogHeader/>, <DialogCloseButton/> and <DialogBody/> ', async () => {
      const headerId = 'header-id';
      const onDismiss = jest.fn();

      await testA11y(
        <Dialog open labelledBy={headerId}>
          <DialogCloseButton onClick={onDismiss} />
          <DialogHeader id={headerId}>Header</DialogHeader>
          <DialogBody>Information you provide to us directly.</DialogBody>
        </Dialog>
      );
    });
  });
});
