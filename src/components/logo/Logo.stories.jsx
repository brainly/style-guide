import * as React from 'react';
import {StoryVariant} from '../../_docs/utils';
import Logo, {TYPE} from './Logo';

export default {
  title: 'Components/Logo',
  parameters: {
    component: Logo,
  },
};

export const Default = args => <Logo {...args} />;

export const Types = args => (
  <div>
    {Object.values(TYPE).map(type => (
      <StoryVariant label={`type - ${type}`} key={type}>
        <Logo {...args} type={type} />
      </StoryVariant>
    ))}
  </div>
);

export const ProductLogos = args => (
  <div>
    {Object.values(TYPE)
      .filter(type => type.includes('logo'))
      .map(type => (
        <StoryVariant label={`type - ${type}`} key={type}>
          <Logo {...args} type={type} />
        </StoryVariant>
      ))}
  </div>
);
