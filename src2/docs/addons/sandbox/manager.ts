/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import {AddonPanel} from '@storybook/components';
import {addons, types} from '@storybook/addons';
import {useChannel} from '@storybook/api';
import {Sandbox} from './Sandbox';
addons.register('sandbox', () => {
  addons.add('sandbox/panel', {
    title: 'Live editor',
    type: types.PANEL,
    render: api => {
      /* eslint-disable react-hooks/rules-of-hooks */
      const [code, setCode] = React.useState('');
      useChannel({
        'storybook/docs/snippet-rendered': (id, newSource) => {
          setCode(newSource);
        },
      });
      return (
        <AddonPanel key="panel" active={api.active}>
          <Sandbox code={code} />
        </AddonPanel>
      );
    },
  });
});