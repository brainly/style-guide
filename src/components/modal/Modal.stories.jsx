import React, {useState} from 'react';
import Modal from './Modal';
import Button from '../buttons/Button';

export default {
  title: 'Components/Modal',
  parameters: {
    component: Modal,
  },
};

export const Default = args => {
  const [isVisible, setIsVisible] = useState(false);
  const onClose = () => setIsVisible(false);
  const onClick = () => setIsVisible(true);

  return (
    <div>
      <Button onClick={onClick}>Open Modal</Button>
      {isVisible && (
        <Modal {...args} closeModal={onClose} onOverlayClick={onClose} />
      )}
    </div>
  );
};

Default.parameters = {
  docs: {
    source: {
      code: `<Modal {...props} />`,
    },
  },
};

Default.args = {
  children: 'Modal window',
  lead: true,
};

Default.argTypes = {
  children: {
    control: null,
  },
};
