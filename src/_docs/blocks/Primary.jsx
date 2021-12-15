// @flow

import React, {useContext} from 'react';
import {DocsContext} from '@storybook/addon-docs/dist/esm/blocks/DocsContext';
import {DocsStory} from './DocsStory';

interface PrimaryProps {
  name?: string;
}

export const Primary = ({name}: PrimaryProps) => {
  const {componentStories: getComponentStories} = useContext(DocsContext);
  const componentStories = getComponentStories();
  let story;

  if (componentStories) {
    story = name
      ? componentStories.find(s => s.name === name)
      : componentStories[0];
  }
  return story ? <DocsStory {...story} expanded={false} withToolbar /> : null;
};
