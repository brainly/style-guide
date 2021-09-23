// @flow

import * as React from 'react';
import deprecate from 'util-deprecate';
import dedent from 'ts-dedent';
import {
  Subheading,
  Anchor,
  Description,
  Story,
} from '@storybook/addon-docs/dist/esm/blocks';
import {Canvas} from './Canvas';
import type {DocsStoryPropsType} from './types';

const warnStoryDescription = deprecate(
  () => null,
  dedent`
    Deprecated parameter: docs.storyDescription => docs.description.story
      
    https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#docs-description-parameter
  `
);

export const DocsStory = ({
  id,
  name,
  expanded = true,
  withToolbar = false,
  parameters = {},
}: DocsStoryPropsType) => {
  let description;
  const {docs} = parameters;

  if (expanded && docs) {
    description = docs.description?.story;
    if (!description) {
      description = docs.storyDescription;
      if (description) warnStoryDescription();
    }
  }

  const subheading = expanded && name;

  return (
    <Anchor storyId={id}>
      {subheading && <Subheading>{subheading}</Subheading>}
      {description && <Description markdown={description} />}
      <Canvas withToolbar={withToolbar}>
        <Story id={id} />
      </Canvas>
    </Anchor>
  );
};
