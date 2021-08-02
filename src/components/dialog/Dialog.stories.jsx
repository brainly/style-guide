import * as React from 'react';
import Dialog from './Dialog';

export default {
  title: 'Components/Dialog',
  parameters: {
    component: Dialog,
  },
};

export const Default = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open dialog</button>
      <Dialog
        isOpen={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="dialog-label"
      >
        <h2 id="dialog-label">Dialog</h2>
        <p>Hello! I am accessible dialog component.</p>
      </Dialog>
    </div>
  );
};
