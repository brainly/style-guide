import * as React from 'react';
import { addons } from '@storybook/addons';
import theme from './theme';
import deprecated from '../deprecated.json';
import {Label} from '../src/_docs/blocks/Label'


addons.setConfig({
  theme,
  panelPosition: 'right',
  showPanel: true,
  sidebarAnimations: true,
  sidebar: {
    renderLabel: (story) => {
      console.log(story);
      if (story.isComponent && !story.isLeaf) {
        return (
          <span>
            {story.name} <Label>deprecated</Label>
          </span>
        );
      }
      return story.name;
    },
  },
});
