import * as React from 'react';
import Spinner, {SPINNER_SIZE, SPINNER_COLOR} from './Spinner';

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

export const Colors = () => (
  <div style={{display: 'flex'}}>
    {Object.values(SPINNER_COLOR).map((color, index) => (
      <div key={index} style={{padding: 8}}>
        <Spinner color={color} />
      </div>
    ))}
  </div>
);

Colors.parameters = {
  backgrounds: {default: 'dark'},
};
