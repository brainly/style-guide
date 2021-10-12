// @flow strict

import * as React from 'react';
import Dialog from './Dialog';
import DialogHeader from './DialogHeader';
import DialogContent from './DialogContent';

export function Example() {
  function handleClose() {
    //
  }

  return (
    <Dialog onEscapeAction={handleClose}>
      <DialogHeader onCloseButtonClick={handleClose} />
      <DialogContent>content</DialogContent>
    </Dialog>
  );
}
