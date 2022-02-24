import * as React from 'react';
import {StoryVariant} from '../../../_docs/utils';
import Logo, {TYPE} from '../Logo';

const Default = args => <Logo {...args} />;

const Types = args => (
  <div>
    {Object.values(TYPE).map(type => (
      <StoryVariant label={`type - ${type}`} key={type}>
        <Logo {...args} type={type} />
      </StoryVariant>
    ))}
  </div>
);

const ProductLogos = args => (
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

export {Default, Types, ProductLogos};
