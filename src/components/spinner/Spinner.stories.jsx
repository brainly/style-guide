import * as React from 'react';
import Spinner, {SPINNER_SIZE} from './Spinner';

export default {
  title: 'Components/Spinner',
  parameters: {
    component: Spinner,
  },
};

export const Default = args => <Spinner {...args} />;

export const Sizes = () => (
  <div style={{display: 'flex'}}>
    {Object.values(SPINNER_SIZE).map((size, index) => (
      <div key={index} style={{padding: 8}}>
        <Spinner size={size} />
      </div>
    ))}
  </div>
);

export const Light = args => <Spinner {...args} />;

Light.args = {
  light: true,
};

Light.parameters = {
  backgrounds: {default: 'dark'},
};
