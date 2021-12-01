import * as React from 'react';
import {
  render,
  fireEvent,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import DialogHeader from './DialogHeader';
import DialogBody from './DialogBody';
import DialogCloseButton from './DialogCloseButton';
import {testA11y} from '../../axe';
import Dialog from './Dialog';

window.scrollTo = jest.fn();
const esc = {
  key: 'Escape',
  code: 'Escape',
  keyCode: 27,
  charCode: 27,
};

describe('Dialog a11y', () => {
  it('renders with <DialogHeader/>, <DialogCloseButton/> and <DialogBody/> ', async () => {
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

  it('has "dialog" role and aria-modal', async () => {
    const label = 'Dialog label';
    const dialog = render(
      <Dialog open label={label}>
        content text
      </Dialog>
    );

    expect(
      dialog.getByRole('dialog', {name: label}).getAttribute('aria-modal')
    ).toBeTruthy();
  });

  it('is described by <DialogBody/> ', async () => {
    const descId = 'desc-id';
    const dialog = render(
      <Dialog open describedBy={descId} label="Dialog label">
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
      <Dialog open label="Dialog label">
        <button id="button">{buttonText}</button>
      </Dialog>
    );

    expect(dialog.getByText(buttonText)).toEqual(document.activeElement);
  });

  it('has focus when it opens and there are no children', async () => {
    const dialog = render(
      <Dialog open label="Dialog label">
        content text
      </Dialog>
    );

    expect(dialog.getByRole('dialog')).toEqual(document.activeElement);
  });

  it('closes on Esc key', () => {
    const dialog = render(<Dialog open>content text</Dialog>);

    fireEvent.keyDown(dialog.getByRole('dialog'), esc);

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

    fireEvent.focus(dialog.getByText(buttonText));
    expect(dialog.getByText(buttonText)).not.toEqual(document.activeElement);

    fireEvent.click(dialog.getByText(buttonText));
    waitForElementToBeRemoved(dialog.queryByRole('dialog'));
  });
});
