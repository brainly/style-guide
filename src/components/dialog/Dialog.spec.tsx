import * as React from 'react';
import Dialog from './Dialog';
import DialogCloseButton from './DialogCloseButton';
import {render, fireEvent} from '@testing-library/react';
import {waitFor} from '@storybook/testing-library';

window.scrollTo = jest.fn();
describe('<Dialog>', () => {
  it('renders children', () => {
    const wrapper = render(<Dialog open>content text</Dialog>);

    expect(wrapper.getByText('content text')).toBeTruthy();
  });

  it('renders proper size', () => {
    const wrapper = render(
      <Dialog size="xl" open>
        content text
      </Dialog>
    );
    const root = wrapper.container.firstElementChild;

    expect(root.classList.contains('sg-dialog__overlay--size-xl')).toBe(true);
  });

  it('renders outside scroll', () => {
    const wrapper = render(
      <Dialog scroll="outside" open>
        content text
      </Dialog>
    );
    const root = wrapper.container.firstElementChild;

    expect(root.classList.contains('sg-dialog__overlay--scroll')).toBe(true);
  });

  it('renders inside scroll', () => {
    const wrapper = render(
      <Dialog scroll="inside" open>
        content text
      </Dialog>
    );
    const dialog = wrapper.getByRole('dialog');

    expect(dialog.classList.contains('sg-dialog__container--scroll')).toBe(
      true
    );
  });

  it('fires onDismiss callback on Escape key', () => {
    const onDismiss = jest.fn();
    const wrapper = render(
      <Dialog onDismiss={onDismiss} open>
        content text
      </Dialog>
    );

    fireEvent.keyUp(wrapper.container.firstChild, {
      key: 'Escape',
    });
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it('fires onDismiss callback on Overlay click', () => {
    const onDismiss = jest.fn();
    const wrapper = render(
      <Dialog onDismiss={onDismiss} open>
        content text
      </Dialog>
    );

    fireEvent.click(wrapper.container.firstChild);
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it('fires onEntryTransitionEnd callback on entry', () => {
    const onEntryTransitionEnd = jest.fn();

    render(
      <Dialog onEntryTransitionEnd={onEntryTransitionEnd} open>
        content text
      </Dialog>
    );
    expect(onEntryTransitionEnd).toHaveBeenCalledTimes(1);
  });

  it('fires onExitTransitionEnd callback on exit', () => {
    const onExitTransitionEnd = jest.fn();
    const {rerender} = render(
      <Dialog onExitTransitionEnd={onExitTransitionEnd} open>
        content text
      </Dialog>
    );

    rerender(
      <Dialog onExitTransitionEnd={onExitTransitionEnd} open={false}>
        content text
      </Dialog>
    );
    expect(onExitTransitionEnd).toHaveBeenCalledTimes(1);
  });

  it('does not fire onEntryTransitionEnd callback before open', () => {
    const onEntryTransitionEnd = jest.fn();

    render(
      <Dialog onEntryTransitionEnd={onEntryTransitionEnd} open={false}>
        content text
      </Dialog>
    );

    expect(onEntryTransitionEnd).toHaveBeenCalledTimes(0);
  });

  it('does not fire onExitTransitionEnd callback before open', () => {
    const onExitTransitionEnd = jest.fn();

    render(
      <Dialog onExitTransitionEnd={onExitTransitionEnd} open={false}>
        content text
      </Dialog>
    );

    expect(onExitTransitionEnd).toHaveBeenCalledTimes(0);
  });

  it('returns null after exit transition', async () => {
    const dialog = render(<Dialog open>content text</Dialog>);

    expect(dialog.container.firstElementChild).not.toBe(null);
    dialog.rerender(<Dialog open={false}>content text</Dialog>);
    await waitFor(() => expect(dialog.container.firstElementChild).toBe(null));
  });

  it('sets given zIndex', () => {
    const dialog = render(
      <Dialog open zIndex={10}>
        content text
      </Dialog>
    );

    expect(
      (dialog.container.firstElementChild as HTMLElement).style.zIndex
    ).toEqual('10');
  });

  it('sets given data-testid to dialog', () => {
    const dialog = render(
      <Dialog open data-testid="test_id">
        content text
      </Dialog>
    );

    expect(dialog.getByTestId('test_id')).toBeTruthy();
  });

  it('sets given data-testid to dialog close button', () => {
    const dialog = render(
      <Dialog open>
        <DialogCloseButton data-testid="test_id" />
      </Dialog>
    );

    expect(dialog.getByTestId('test_id')).toBeTruthy();
  });

  it('forces no-scroll class removal before onExitTransitionEnd callback', () => {
    const onExitTransitionEnd = () => {
      expect(
        document.body.classList.contains('sg-dialog-no-scroll')
      ).toBeFalsy();
    };

    const dialog = render(
      <Dialog onExitTransitionEnd={onExitTransitionEnd} open>
        content text
      </Dialog>
    );

    dialog.rerender(
      <Dialog onExitTransitionEnd={onExitTransitionEnd} open={false}>
        content text
      </Dialog>
    );
  });

  it('does not force no-scroll class removal before onEntryTransitionEnd callback', () => {
    const onEntryTransitionEnd = () => {
      expect(
        document.body.classList.contains('sg-dialog-no-scroll')
      ).toBeTruthy();
    };

    const dialog = render(
      <Dialog onEntryTransitionEnd={onEntryTransitionEnd} open>
        content text
      </Dialog>
    );

    dialog.rerender(
      <Dialog onEntryTransitionEnd={onEntryTransitionEnd} open={false}>
        content text
      </Dialog>
    );
  });
});
