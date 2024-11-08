import {SandpackProvider, SandpackPreview} from '@codesandbox/sandpack-react';
// @ts-ignore TS7016
import styleguideJsCode from '!!raw-loader!../../../../dist/sandbox/sandbox';
import * as React from 'react';
import {CodeEditor} from './CodeEditor';
import {githubLight} from '@codesandbox/sandpack-themes';
import './sandbox.scss';

type SandboxPropsType = {
  code: string;
};

const wrap = (code: string) => `import './style-guide.js';

export default function App() {
  return ${code};
}`;

export const Sandbox = ({code = ''}: SandboxPropsType) => {
  return (
    <SandpackProvider
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
    >
      <div className="sandbox-layout">
        <CodeEditor code={wrap(code)} />
        <SandpackPreview
          showRefreshButton={false}
          showOpenInCodeSandbox={false}
        />
      </div>
    </SandpackProvider>
  );
};
