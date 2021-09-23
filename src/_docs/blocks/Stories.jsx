// @flow

import React, {useContext} from 'react';
import type {Element} from 'react';
import {DocsContext} from '@storybook/addon-docs/dist/esm/blocks/DocsContext';
import {Heading} from '@storybook/addon-docs/dist/esm/blocks/Heading';
import {getDocsStories} from '@storybook/addon-docs/dist/esm/blocks/utils';
import type {DocsStoryPropsType} from './types';
import {DocsStory} from './DocsStory';

interface StoriesProps {
  title?: Element<*> | string;
  includePrimary?: boolean;
}

export const Stories = ({title, includePrimary = false}: StoriesProps) => {
  const context = useContext(DocsContext);
  const componentStories = getDocsStories(context);

  const stories: Array<DocsStoryPropsType> = [
    ...(!includePrimary ? componentStories.slice(1) : componentStories),
  ];

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
