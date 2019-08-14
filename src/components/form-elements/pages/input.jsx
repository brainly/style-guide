import React from 'react';
import Input, {SIZE, COLOR} from '../Input';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';

const voidFunction = () => undefined;

const textInputs = () => (
  <div>
    <DocsBlock info="Default">
      <Input placeholder="placeholder" />
    </DocsBlock>
    <DocsBlock info="Valid">
      <Input
        placeholder="placeholder"
        valid
        value="This is valid example"
        onChange={voidFunction}
      />
    </DocsBlock>
    <DocsBlock info="Invalid">
      <Input
        placeholder="placeholder"
        invalid
        value="This is invalid example"
        onChange={voidFunction}
      />
    </DocsBlock>
    <DocsBlock info="Small">
      <Input placeholder="placeholder" size={SIZE.SMALL} />
    </DocsBlock>
    <DocsBlock info="Large">
      <Input placeholder="placeholder" size={SIZE.LARGE} />
    </DocsBlock>
    <DocsBlock info="Full width">
      <Input placeholder="placeholder" fullWidth />
    </DocsBlock>
    <DocsBlock info="Light">
      <ContrastBox fullWidth>
        <Input placeholder="placeholder" fullWidth color={COLOR.LIGHT} />
      </ContrastBox>
    </DocsBlock>
    <DocsBlock info="Light alt">
      <Input placeholder="placeholder" fullWidth color={COLOR.LIGHT_ALT} />
    </DocsBlock>
    <DocsBlock info="Password">
      <Input
        type="password"
        value="secret"
        placeholder="Type password"
        onChange={voidFunction}
      />
    </DocsBlock>
  </div>
);

export default textInputs;
