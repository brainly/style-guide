import * as React from 'react';
import {StoryVariantTable} from '../../_docs/utils';
import Headline, {TEXT_COLOR} from '../text/Headline';
import FlashMessage from './FlashMessage';

export default {
  title: 'Components/FlashMessage',
  parameters: {
    component: FlashMessage,
  },
  args: {
    text: 'Example flash message text',
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
