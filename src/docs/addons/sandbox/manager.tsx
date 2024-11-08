/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import {AddonPanel} from '@storybook/components';
import {addons, types} from '@storybook/addons';
import {useChannel, useStorybookState} from '@storybook/api';
import {Sandbox} from './Sandbox';

addons.register('sandbox', () => {
  addons.add('sandbox/panel', {
    title: 'Live editor',
    type: types.PANEL,
    render: ({active, key}) => {
      /* eslint-disable react-hooks/rules-of-hooks */
      const [code, setCode] = React.useState('');
      const state = useStorybookState();

      useChannel({
        'storybook/docs/snippet-rendered': (id, newSource) => {
          setCode(newSource);
        },
      });

      return (
        // @ts-expect-error TS2322
        <AddonPanel key={key} active={active}>
          {active && state.layout.showPanel && state.viewMode !== 'docs' ? (
            <Sandbox code={code} />
          ) : null}
        </AddonPanel>
      );
    },
  });
});
