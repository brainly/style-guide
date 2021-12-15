import * as React from 'react';
import { addons } from '@storybook/addons';
import theme from './theme';
import { styled } from '@storybook/theming';

const Label = styled.div(({ theme }) => ({
  fontFamily: theme.typography.fonts.base,
  fontSize: theme.typography.size.s1,
  fontWeight: '400',
  lineHeight: '14px',
  color: '#46535f',
  backgroundColor: '#fff',
  borderRadius: '8px',
  padding: '0px 7px',
  display: 'inline-block',
  marginLeft: '8px',
  border: '1px solid #c3d1dd',
}));

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
