import React from 'react';
import Modal from '../Modal';

const ModalExample = () => (
  <html lang="en">
    <head>
      <link rel="stylesheet" href="../../../style-guide.css" />
    </head>
    <body>
      <Modal closeModal={() => undefined}>Modal window</Modal>
    </body>
  </html>
);

export default ModalExample;
