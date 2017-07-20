import React from 'react';
import Textarea, {SIZE, VALIDATION} from '../Textarea';
import DocsBlock from 'DocsBlock';
import ContrastBox from 'ContrastBox';

const textareas = () => <div>
  <DocsBlock info="Default">
    <Textarea placeholder="placeholder"/>
  </DocsBlock>
  <DocsBlock info="Short">
    <Textarea placeholder="placeholder" size={SIZE.SHORT}/>
  </DocsBlock>
  <DocsBlock info="Full width">
    <Textarea placeholder="placeholder" fullWidth={true}/>
  </DocsBlock>
  <DocsBlock info="Valid">
    <Textarea placeholder="placeholder" valid={VALIDATION.VALID} value="This is valid example"
      onChange={() => undefined}/>
  </DocsBlock>
  <DocsBlock info="Invalid">
    <Textarea placeholder="placeholder" valid={VALIDATION.INVALID} value="This is invalid example"
      onChange={() => undefined}/>
  </DocsBlock>
  <DocsBlock info="Tall, XTall" multiContent={[
    <Textarea placeholder="placeholder" size={SIZE.TALL}/>,
    <Textarea placeholder="placeholder" size={SIZE.XTALL}/>
  ]}/>

  <DocsBlock info="Simple">
    <ContrastBox>
      <Textarea placeholder="placeholder" simple={true}/>
    </ContrastBox>
  </DocsBlock>
  <DocsBlock info="Auto height">
    <Textarea placeholder="placeholder" autoHeight={true}/>
  </DocsBlock>
</div>;

export default textareas;
