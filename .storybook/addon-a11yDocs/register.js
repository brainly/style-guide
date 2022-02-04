import React from 'react';
import { addons, types } from '@storybook/addons';
import { useParameter } from '@storybook/api';
import { Description, DocsPageWrapper } from "@storybook/components"
import {styled, css} from '@storybook/theming';

const A11yDocs = () => {
  const value = useParameter('a11yDocs', null) || '';
  return (
    <DocsPageWrapper>
      <Description markdown={value}></Description>
    </DocsPageWrapper>    
  );
};

addons.register('a11yDocs', () => {
  addons.add('a11yDocs/tab', {
    type: types.TAB,
    title: 'Accessibility Docs',
    render: ({active}) => active ? <A11yDocs /> : null ,
    route: ({ storyId, refId }) => (refId ? `/a11yDocs/${refId}_${storyId}` : `/a11yDocs/${storyId}`),
    match: ({ viewMode}) => viewMode === 'a11ydocs',
    paramKey: 'a11yDocs',
  });
});
