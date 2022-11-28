import {Sandpack} from '@codesandbox/sandpack-react';
import * as React from 'react';
import styleguideJsCodeRaw from '!!raw-loader!../../../dist-sandbox/style-guide';
import styleguideStylesJsCodeRaw from '!!raw-loader!../../../dist-sandbox/style-guide-styles';
import iconsCodeRaw from '!!raw-loader!../../images/icons';
import subjectIconsCodeRaw from '!!raw-loader!../../images/subjects-icons';
import subjectMonoIconsCodeRaw from '!!raw-loader!../../images/subjects-mono-icons';
import mathSymbolsIconsCodeRaw from '!!raw-loader!../../images/math-symbols-icons';
import mobileIconsCodeRaw from '!!raw-loader!../../images/mobile-icons';

export default {
  title: 'Tools/Sandbox',
};

const code = `
import {Button, Icon, Logo} from './style-guide.js';

export default function App() {
  return <div>
    <Button>Hello from styleguide!</Button>
    <Icon
      color="adaptive"
      size={32}
      type="academic_cap"
    />
    <Logo />
  </div>
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
            code: `
            ${iconsCodeRaw}
            ${subjectIconsCodeRaw}
            ${subjectMonoIconsCodeRaw}
            ${mathSymbolsIconsCodeRaw}
            ${mobileIconsCodeRaw}
            ${styleguideStylesJsCodeRaw}
            ${styleguideJsCodeRaw}
            `,
            hidden: true,
          },
        }}
      />
    </div>
  );
