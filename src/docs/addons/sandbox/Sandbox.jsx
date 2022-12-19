// @flow

import {Sandpack} from '@codesandbox/sandpack-react';
import {githubLight} from '@codesandbox/sandpack-themes';
// $FlowFixMe
import styleguideJsCode from '!!raw-loader!../../../../dist/sandbox/sandbox';
import * as React from 'react';

type SandboxPropsType = {
  code: string,
};

const wrap = (code: string) => `import './style-guide.js';

export default function App() {
  return ${code};
}`;

export const Sandbox = ({code = ''}: SandboxPropsType) => {
  return (
    <Sandpack
      template="react"
      theme={githubLight}
      files={{
        'App.js': {
          code: wrap(code),
          active: true,
        },
        'style-guide.js': {
          code: styleguideJsCode,
          hidden: true,
        },
      }}
      options={{
        editorHeight: 600,
      }}
    />
  );
};
