import React from 'react';
import { addons, types } from '@storybook/addons';
import { useParameter } from '@storybook/api';
import { Description } from "@storybook/components"
import {styled, css} from '@storybook/theming';

const Page = styled.div`
  background: #FFFFFF;
  display: flex;
  justify-content: center;
  padding: 4rem 20px;
  min-height: 100vh;
`

const A11yDocs = () => {
  const value = useParameter('a11yDocs', null) || '';
  return (
    <Page id="a11yDocs" key="a11yDocs">
      <Description markdown={value}></Description>
    </Page>
  );
};

addons.register('a11yDocs', () => {
  addons.add('a11yDocs/tab', {
    type: types.TAB,
    title: 'Accessibility Docs',
    render: () => <A11yDocs /> ,
    route: ({ storyId, refId }) => (refId ? `/a11yDocs/${refId}_${storyId}` : `/a11yDocs/${storyId}`),
    match: ({ viewMode}) => viewMode === 'a11ydocs',
    paramKey: 'a11yDocs',
  });
});
