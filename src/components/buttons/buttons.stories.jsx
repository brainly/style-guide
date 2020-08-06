import React from 'react';
import Button from './Button';

export default {title: 'Components/Button', component: Button};

export const withText = () => <Button>Hello Button</Button>;

export const withEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
