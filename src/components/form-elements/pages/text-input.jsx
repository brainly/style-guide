import React from 'react';
import TextInput, {SIZE, COLOR} from '../TextInput';
import DocsBlock from 'components/DocsBlock';
import ContrastBox from 'components/ContrastBox';

const textInputs = () => <div>
  <DocsBlock info="Default">
    <TextInput placeholder="placeholder"/>
  </DocsBlock>
  <DocsBlock info="Valid">
    <TextInput placeholder="placeholder" valid={true} value="This is valid example" onChange={() => undefined}/>
  </DocsBlock>
  <DocsBlock info="Invalid">
    <TextInput placeholder="placeholder" invalid={true} value="This is invalid example" onChange={() => undefined}/>
  </DocsBlock>
  <DocsBlock info="Small">
    <TextInput placeholder="placeholder" size={SIZE.SMALL}/>
  </DocsBlock>
  <DocsBlock info="Large">
    <TextInput placeholder="placeholder" size={SIZE.LARGE}/>
  </DocsBlock>
  <DocsBlock info="Full width">
    <TextInput placeholder="placeholder" fullWidth={true}/>
  </DocsBlock>
  <DocsBlock info="Light">
    <ContrastBox fullWidth={true}>
      <TextInput placeholder="placeholder" fullWidth={true} color={COLOR.LIGHT}/>
    </ContrastBox>
  </DocsBlock>
  <DocsBlock info="Light alt">
    <TextInput placeholder="placeholder" fullWidth={true} color={COLOR.LIGHT_ALT}/>
  </DocsBlock>
  <DocsBlock info="Password">
    <TextInput type="password" value="secret" placeholder="Type password" onChange={() => undefined}
    />
  </DocsBlock>
</div>;

export default textInputs;
