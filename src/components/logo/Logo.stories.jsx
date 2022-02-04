import * as React from 'react';
import {StoryVariant} from '../../_docs/utils';
import Logo, {TYPE} from './Logo';
import A11yDocs from './Logo.a11y.md';

export default {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    a11yDocs: A11yDocs,
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
