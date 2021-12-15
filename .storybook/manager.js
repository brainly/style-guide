import * as React from 'react';
import { addons } from '@storybook/addons';
import theme from './theme';
import deprecated from '../deprecated.json';
import { Badge } from '../src/_docs/blocks/Badge';
import { Label } from '../src/_docs/blocks/Label';

addons.setConfig({
  theme,
  panelPosition: 'right',
  showPanel: true,
  sidebarAnimations: true,
  sidebar: {
    renderLabel: (story) => {
      const isDeprecated = deprecated.components.find(
        (item) =>
          item.componentName?.toLowerCase() === story.name?.toLowerCase(),
      );
      if (story.isComponent && !story.isLeaf && isDeprected) {
        return (
          <Label status={<Badge color="neutral">deprecated</Badge>}>
            {story.name}
          </Label>
        );
      }
      return story.name;
    },
  },
});
