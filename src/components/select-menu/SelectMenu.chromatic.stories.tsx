import * as React from 'react';
import * as SelectMenuStories from './SelectMenu.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';
import SelectMenu, {SIZE as SELECT_SIZE} from './SelectMenu';

export const Sizes = args => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '200px',
        paddingBottom: '200px',
      }}
    >
      {Object.values(SELECT_SIZE).map(size => (
        <SelectMenu {...args} defaultExpanded size={size} key={size} />
      ))}
    </div>
  );
};

const Hovers = args => {
  const types = [
    {name: 'default'},
    {name: 'expanded', defaultExpanded: true},
    {disabled: true, name: 'disabled'},
  ];

  return (
    <div>
      {types.map(t => (
        <div key={t.name}>
          Default: {t.name}
          <SelectMenu {...args} {...t} />
        </div>
      ))}
      <div style={{background: 'black'}}>
        {types.map(t => (
          <div key={t.name}>
            <span style={{color: 'white'}}>White: {t.name}</span>
            <SelectMenu {...args} {...t} color="white" />
          </div>
        ))}
      </div>
    </div>
  );
};

// Ensure each SelectMenu in chromatic stories is expanded by default and has enough space to display
Object.entries(SelectMenuStories).forEach((story): any => {
  (story[1] as any).args = {...(story[1] as any).args, defaultExpanded: true};
  (story[1] as any).style = {
    ...(story[1] as any).style,
    marginBottom: '400px',
  };
});

export const Default = generateChromaticStory(
  {
    ...SelectMenuStories,
    Sizes,
  },
  {
    storiesToHover: [Hovers],
  }
);
const {includeStories, ...meta} = SelectMenuStories.default;

export default meta;
