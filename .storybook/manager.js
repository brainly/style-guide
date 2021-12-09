import * as React from 'react';
import { addons } from '@storybook/addons';
import theme from './theme';
import { styled } from '@storybook/theming';

const Label = styled.div(({ theme }) => ({
  fontFamily: theme.typography.fonts.base,
  fontSize: theme.typography.size.s1,
  fontWeight: 'bold',
  color: '#fff',
  lineHeight: 1.2,
  backgroundColor: '#ff7968',
  borderRadius: 4,
  padding: '2px 4px',
  display: 'inline',
  marginLeft: '8px',
}));

addons.setConfig({
  theme,
  panelPosition: 'right',
  showPanel: true,
  sidebarAnimations: true,
  sidebar: {
    renderLabel: (story) => {
      console.log(story);
      if(story.isComponent && !story.isLeaf) {
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
