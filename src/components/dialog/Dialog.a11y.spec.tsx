import * as React from 'react';
import {
  screen,
  render,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import DialogHeader from './DialogHeader';
import DialogBody from './DialogBody';
import DialogCloseButton from './DialogCloseButton';
import {testA11y} from '../../axe';
import Dialog from './Dialog';
import userEvent from '@testing-library/user-event';
window.scrollTo = jest.fn();
describe('Dialog a11y', () => {
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
  it('correctly handles escape key for nested Dialogs', () => {
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
});
