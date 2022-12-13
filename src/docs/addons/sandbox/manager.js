import React from 'react';
import {AddonPanel} from '@storybook/components';
import {addons, types} from '@storybook/addons';
import {
  useGlobals,
  useChannel,
  useStorybookState,
  useAddonState,
} from '@storybook/api';
import {STORY_CHANGED, STORY_ARGS_UPDATED} from '@storybook/core-events';
import {Sandbox} from './Sandbox';

const getFullCode = jsx => `export default function App() {
  return <div>
    ${jsx}
  </div>
}`;

addons.register('sandbox', () => {
  addons.add('sandbox/panel', {
    title: 'Live editor',
    type: types.PANEL,
    render: api => {
      const [code, setCode] = React.useState('');

      useChannel({
        'storybook/docs/snippet-rendered': (id, newSource) => {
          console.log(newSource);
          setCode(newSource);
        },
      });

      return (
        <AddonPanel key="panel" active={api.active}>
          <Sandbox code={getFullCode(code)} />
        </AddonPanel>
      );
    },
  });
});
