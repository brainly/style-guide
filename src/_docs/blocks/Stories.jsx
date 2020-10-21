// @flow

import React, {useContext} from 'react';
import type {Element} from 'react';
import {DocsContext} from '@storybook/addon-docs/dist/blocks/DocsContext';
import {Heading} from '@storybook/addon-docs/dist/blocks/Heading';
import {getDocsStories} from '@storybook/addon-docs/dist/blocks/utils';
import {DocsStoryProps} from '@storybook/addon-docs/dist/blocks/types';
import {DocsStory} from './DocsStory';

interface StoriesProps {
  title?: Element<*> | string;
  includePrimary?: boolean;
}

export const Stories = ({title, includePrimary = false}: StoriesProps) => {
  const context = useContext(DocsContext);
  const componentStories = getDocsStories(context);

  let stories: Array<DocsStoryProps> = componentStories;

  if (!includePrimary) stories = stories.slice(1);

  if (!stories || stories.length === 0) {
    return null;
  }
  return (
    <>
      <Heading>{title}</Heading>
      {stories.map(
        story => story && <DocsStory key={story.id} {...story} expanded />
      )}
    </>
  );
};

Stories.defaultProps = {
  title: 'Stories',
};
