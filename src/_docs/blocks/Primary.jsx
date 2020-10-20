// @flow

import React, {useContext} from 'react';
import {DocsContext} from '@storybook/addon-docs/dist/blocks/DocsContext';
import {DocsStory} from './DocsStory';
import {getDocsStories} from '@storybook/addon-docs/dist/blocks/utils';

interface PrimaryProps {
  name?: string;
}

export const Primary = ({name}: PrimaryProps) => {
  const context = useContext(DocsContext);
  const componentStories = getDocsStories(context);
  let story;

  if (componentStories) {
    story = name
      ? componentStories.find(s => s.name === name)
      : componentStories[0];
  }
  return story ? <DocsStory {...story} expanded={false} withToolbar /> : null;
};
