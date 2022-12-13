import * as React from 'react';
import {Sandbox as SandboxComponent} from '../addons/sandbox/Sandbox';

export default {
  title: 'Tools/Live Editor',
  parameters: {
    layout: 'fullscreen',
  },
};

export const LiveEditor = () => (
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
        You are using dev mode, to use current style guide code you may need to
        rebuild sandbox (storybook restart is not required)
      </div>
    ) : null}
    <SandboxComponent
      code={`
      import * as React from 'react';

      window.react = React;
      export default function App() {
  return <div>
    <Logo />
    <TextBit color="text-black">
        Welcome in <br/> styleguide live editor
    </TextBit>
    <Flex marginTop="s" alignItems="center">
        <Text>Here you can</Text>
        <Flex marginLeft="xxs" marginRight="xxs">
          <Icon color="icon-indigo-50"
            size={16}
            type="play"
          />
          </Flex>
        <Text>with components</Text>
    </Flex>
  </div>
}`}
    />
  </div>
);
