// @flow

import {Sandpack} from '@codesandbox/sandpack-react';
import {githubLight} from '@codesandbox/sandpack-themes';
import * as React from 'react';
// $FlowFixMe

type SandboxPropsType = {
  code: string,
};

export const Sandbox = ({code = ''}: SandboxPropsType) => {
  return (
    <Sandpack
      theme={githubLight}
      template="react"
      files={{
        'App.js': {
          code,
          active: true,
        },
      }}
      options={{
        editorHeight: 600, // default - 300
        externalResources: [`${__webpack_public_path__}sandbox.js`],
      }}
    />
  );
};
