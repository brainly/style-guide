import * as React from 'react';
import { addons } from '@storybook/addons';
import theme from './theme';
import deprecated from '../deprecated.json';
import { Badge } from '../src/_docs/blocks/Badge';

addons.setConfig({
  theme,
  panelPosition: 'right',
  showPanel: true,
  sidebarAnimations: true,
  sidebar: {
    renderLabel: (story) => {
      isDeprecated = deprecated.components.find(
        (item) =>
          item.componentName?.toLowerCase() === story.name?.toLowerCase(),
      );
      if (story.isComponent && !story.isLeaf && isDeprecated) {
        return (
          <span>
            <span style={{ marginRight: '8px' }}>{story.name}</span>
            <Badge status="warning">deprecated</Badge>
          </span>
        );
      }
      return story.name;
    },
  },
});
