import React from 'react';
import Input, {SIZE, COLOR} from '../Input';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';

const textInputs = () => <div>
  <DocsBlock info="Default">
    <Input placeholder="placeholder"/>
  </DocsBlock>
  <DocsBlock info="Valid">
    <Input placeholder="placeholder" valid={true} value="This is valid example" onChange={() => undefined}/>
  </DocsBlock>
  <DocsBlock info="Invalid">
    <Input placeholder="placeholder" invalid={true} value="This is invalid example" onChange={() => undefined}/>
  </DocsBlock>
  <DocsBlock info="Small">
    <Input placeholder="placeholder" size={SIZE.SMALL}/>
  </DocsBlock>
  <DocsBlock info="Large">
    <Input placeholder="placeholder" size={SIZE.LARGE}/>
  </DocsBlock>
  <DocsBlock info="Full width">
    <Input placeholder="placeholder" fullWidth={true}/>
  </DocsBlock>
  <DocsBlock info="Light">
    <ContrastBox fullWidth={true}>
      <Input placeholder="placeholder" fullWidth={true} color={COLOR.LIGHT}/>
    </ContrastBox>
  </DocsBlock>
  <DocsBlock info="Light alt">
    <Input placeholder="placeholder" fullWidth={true} color={COLOR.LIGHT_ALT}/>
  </DocsBlock>
  <DocsBlock info="Password">
    <Input type="password" value="secret" placeholder="Type password" onChange={() => undefined}
    />
  </DocsBlock>
</div>;

export default textInputs;
