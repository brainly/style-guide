import * as React from 'react';
import Dialog from './Dialog';
import DialogCloseButton from './DialogCloseButton';
import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
  screen,
} from '@testing-library/react';
import {waitFor} from '@storybook/testing-library';
import userEvent from '@testing-library/user-event';
import {testA11y} from '../../axe';
import DialogBody from './DialogBody';
import DialogHeader from './DialogHeader';

window.scrollTo = jest.fn();

describe('<Dialog>', () => {
  it('renders children', () => {
    const wrapper = render(<Dialog open>content text</Dialog>);

    expect(wrapper.getByText('content text')).toBeTruthy();
  });

  it('fires onDismiss callback on Escape key', () => {
    const onDismiss = jest.fn();
    const wrapper = render(
      <Dialog onDismiss={onDismiss} open>
        content text
      </Dialog>
    );

    // @ts-expect-error TS2345
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

    // @ts-expect-error TS2345
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

  it('has "dialog" role and aria-modal', async () => {
    const label = 'Dialog label';
    const dialog = render(
      <Dialog open aria-label={label}>
        content text
      </Dialog>
    );

    expect(
      dialog
        .getByRole('dialog', {
          name: label,
        })
        .getAttribute('aria-modal')
    ).toBeTruthy();
  });

  it('is described by <DialogBody/> ', async () => {
    const descId = 'desc-id';
    const dialog = render(
      <Dialog open aria-describedby={descId} aria-label="Dialog label">
        {/*@ts-expect-error to be fixed, dialog body doesn't expose id*/}
        <DialogBody id={descId}>
          Information you provide to us directly.
        </DialogBody>
      </Dialog>
    );

    await testA11y(dialog.container);
    expect(dialog.getByRole('dialog').getAttribute('aria-describedby')).toEqual(
      descId
    );
  });

  it('moves focus to first tabbable element when opens', async () => {
    const buttonText = 'button';
    const dialog = render(
      <Dialog open aria-label="Dialog label">
        <button id="button">{buttonText}</button>
      </Dialog>
    );

    expect(dialog.getByText(buttonText)).toEqual(document.activeElement);
  });

  it('has focus when it opens and there are no children', async () => {
    const dialog = render(
      <Dialog open aria-label="Dialog label">
        content text
      </Dialog>
    );

    expect(dialog.getByRole('dialog')).toEqual(document.activeElement);
  });

  it('closes on Esc key', () => {
    const dialog = render(<Dialog open>content text</Dialog>);

    userEvent.keyboard('{esc}');
    waitForElementToBeRemoved(dialog.queryByRole('dialog'));
  });

  it('blocks user interaction outside dialog and closes dialog on click outside', () => {
    const buttonText = 'label';
    const dialog = render(
      <div>
        <Dialog open>content text</Dialog>
        <button>{buttonText}</button>
      </div>
    );

    userEvent.click(dialog.getByText(buttonText));
    waitForElementToBeRemoved(dialog.queryByRole('dialog'));
  });

  it('handles escape key for nested Dialogs', () => {
    // TODO: improve this test to adhere to react-testing-library standards
    // so to check modal visibility instead of onDismiss callback
    const onDismissOuter = jest.fn();
    const onDismissInner = jest.fn();

    render(
      <Dialog open onDismiss={onDismissOuter}>
        <Dialog open onDismiss={onDismissInner} data-testid="inner-dialog">
          Inner content
        </Dialog>
      </Dialog>
    );
    screen.getByText('Inner content').focus();
    userEvent.keyboard('{esc}');
    expect(onDismissInner).toBeCalled();
    expect(onDismissOuter).not.toBeCalled();
  });

  describe('a11y', () => {
    it('renders with <DialogHeader/>, <DialogCloseButton/> and <DialogBody/> ', async () => {
      const headerId = 'header-id';
      const onDismiss = jest.fn();

      await testA11y(
        <Dialog open aria-labelledby={headerId}>
          <DialogCloseButton onClick={onDismiss} />
          <DialogHeader id={headerId}>Header</DialogHeader>
          <DialogBody>Information you provide to us directly.</DialogBody>
        </Dialog>
      );
    });
  });
});
