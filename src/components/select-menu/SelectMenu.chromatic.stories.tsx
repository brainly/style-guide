import * as React from 'react';
import * as SelectMenuStories from './SelectMenu.stories.mdx';
import {generateChromaticStory} from '../../chromatic/utils';
import SelectMenu, {SIZE as SELECT_SIZE} from './SelectMenu';

export const Sizes = args => {
  return (
    <div>
      {Object.values(SELECT_SIZE).map(size => (
        <SelectMenu {...args} defaultExpanded size={size} key={size} />
      ))}
    </div>
  );
};

export const Default = generateChromaticStory({...SelectMenuStories, Sizes});
const {includeStories, ...meta} = SelectMenuStories.default;

export default meta;
