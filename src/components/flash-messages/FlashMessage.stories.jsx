import * as React from 'react';
import {StoryVariantTable} from '../../_docs/utils';
import Headline from '../text/Headline';
import FlashMessage from './FlashMessage';
import A11yDocs from './FlashMessage.a11y.md';

export default {
  title: 'Components/FlashMessage',
  component: FlashMessage,
  args: {
    text: 'Example flash message text',
  },
  parameters: {
    a11yDocs: A11yDocs,
  },
};

export const Default = args => {
  return <FlashMessage {...args} />;
};

export const Types = args => (
  <StoryVariantTable>
    {['default', 'success', 'error', 'info'].map(type => (
      <tr key={type}>
        <td>
          <Headline
            extraBold
            transform="uppercase"
            type="span"
            color="text-gray-40"
            size="medium"
            align="to-right"
          >
            {type}
          </Headline>
        </td>
        <td width="500">
          <FlashMessage {...args} type={type} />
        </td>
      </tr>
    ))}
  </StoryVariantTable>
);
