import {Sandpack} from '@codesandbox/sandpack-react';
import * as React from 'react';
import styleguideJsCodeRaw from '!!raw-loader!SandboxStyleGuideJS';
import styleguideCssCodeRaw from '!!raw-loader!SandboxStyleGuideCSS';
import fontsCodeRaw from '!!raw-loader!../../sandbox/fonts.css';

console.log(styleguideCssCodeRaw);

export default {
  title: 'Tools/Sandbox',
};

const code = `import './style-guide.css';
import './fonts.css';
import {Button} from './style-guide.js';

export default function App() {
  return <Button>Hello from styleguide!</Button>
}`;

export const Sandbox = () =>
  styleguideJsCodeRaw.startsWith('SANDBOX_STYLE_GUIDE_ERROR') ? (
    <div
      style={{
        backgroundColor: '#ffe8e5',
        fontWeight: '700',
        padding: '5px 10px',
        marginBottom: '15px',
        borderRadius: 5,
      }}
    >
      {styleguideJsCodeRaw.split('SANDBOX_STYLE_GUIDE_ERROR:')}
    </div>
  ) : (
    <div>
      {STORYBOOK_ENV === 'dev' ? (
        <div
          style={{
            backgroundColor: '#fff3d6',
            fontWeight: '700',
            padding: '5px 10px',
            marginBottom: '15px',
            borderRadius: 5,
          }}
        >
          You are using dev mode, to use current style guide code you may need
          to rebuild sandbox (storybook restart is not required)
        </div>
      ) : null}
      <Sandpack
        theme="dark"
        template="react"
        files={{
          'App.js': {
            code,
            active: true,
          },
          'style-guide.js': {
            code: styleguideJsCodeRaw,
            hidden: true,
          },
          'style-guide.css': {
            code: styleguideCssCodeRaw,
            hidden: true,
          },
          'fonts.css': {
            code: fontsCodeRaw,
            hidden: true,
          },
        }}
      />
    </div>
  );
